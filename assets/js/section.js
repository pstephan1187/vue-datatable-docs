const stripIndent = require('strip-indent');

class Section
{
    constructor(section)
    {
        this.id = section.id;
        this.title = section.title;
        this.content = section.content;
        this.examples = [];
        this.demo = {
            url: null,
            height: 800
        }

        if ('demo' in section) {
            this.demo.url = section.demo.url;

            if ('height' in section.demo) {
                this.demo.height = section.demo.height;
            }

            this.parseDemo();
        }

        if ('examples' in section) {
            for (var i in section.examples) {
                var example = section.examples[i];

                if (!('id' in example)) {
                    example.id = example.type;
                }

                if (!('url' in example)) {
                    example.url = null;
                }

                example.content = stripIndent(example.content).replace(/^[\n\r]/, '');

                this.examples.push(example);
            }
        }
    }

    parseDemo()
    {
        axios.get(this.demo.url).then(function (response) {
            let parser = new DOMParser();
            let document = parser.parseFromString(response.data, "text/html");
            let examples = document.querySelectorAll('[data-example]');

            for (let example of examples) {
                let example_json = JSON.parse(example.dataset.example);

                var section_example = {
                    type: example_json.type,
                    label: example_json.label,
                    url: this.demo.url,
                    content: stripIndent(example.innerHTML),
                }

                if ('id' in example_json) {
                    section_example.id = example_json.id;
                } else {
                    section_example.id = example_json.type;
                }

                this.examples.push(section_example);
            }
        }.bind(this));
    }
}

export default Section;
