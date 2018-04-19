// all HTML templates used by the application
// these are essentially prepackaged into the application and
// not loaded on-demand (see TemplateService)

const Templates = {
    FOO: require("ejs-compiled-loader!../../assets/templates/template.ejs")
};

export { Templates };
