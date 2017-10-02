function validate(name, value) {
  if ((/.+/).test(value)) {
    return true;
  }
  return name + ' is required';
}

const defaults = function (name) {

  const prompts = [
    {
      type: 'input',
      name: 'name',
      message: name + ' for?',
      validate: validate.bind(this, name + ' name')
    },
    {
      type: 'directory',
      name: 'path',
      message: 'Path?',
      basePath: '.'
    }
  ];

  return {
    description: 'New ' + name,
    prompts: prompts
  }
};

const actions = [
  {
    type: 'add',
    path: './{{ path }}/{{dashCase name}}.actions.ts',
    templateFile: './templates/_actions.ts'
  }
];


function actionGenerator(plop) {
  plop.setGenerator('Action',
    Object.assign({}, defaults('Action'), {
      actions: actions
    })
  );
}

const reducer = [
  {
    type: 'add',
    path: './{{ path }}/{{dashCase name}}.reducer.ts',
    templateFile: './templates/_reducer.ts'
  },
  {
    type: 'add',
    path: './{{ path }}/{{dashCase name}}.reducer.spec.ts',
    templateFile: './templates/_reducer.spec.ts'
  }
];

function reducerGenerator(plop) {
  plop.setGenerator('Reducer',
    Object.assign({}, defaults('Reducer'), {
      actions: reducer
    })
  );
}

const effect = [
  {
    type: 'add',
    path: './{{ path }}/{{dashCase name}}.effects.ts',
    templateFile: './templates/_effect.ts'
  }, {
    type: 'add',
    path: './{{ path }}/{{dashCase name}}.effects.spec.ts',
    templateFile: './templates/_effects.spec.ts'
  }
];

function effectGenerator(plop) {
  plop.setGenerator('Effect',
    Object.assign({}, defaults('Effect'), {
      actions: effect
    })
  );
}

const service = [
  {
    type: 'add',
    path: './{{ path }}/{{dashCase name}}.service.ts',
    templateFile: './templates/_service.ts'
  }, {
    type: 'add',
    path: './{{ path }}/{{dashCase name}}.service.spec.ts',
    templateFile: './templates/_service.spec.ts'
  }
];

function serviceGenerator(plop) {
  plop.setGenerator('Service',
    Object.assign({}, defaults('Service'), {
      actions: service
    })
  );
}

function wholeGenerator(plop) {
  plop.setGenerator('The whole shebang',
    Object.assign({}, defaults('Whole'), {
      description: 'Actions, Reducer, Service and Effect',
      actions: [].concat(actions, reducer, effect, service)
    })
  );
}

module.exports = function (plop) {
  plop.addPrompt('directory', require('inquirer-directory'));

  wholeGenerator(plop);
  actionGenerator(plop);
  reducerGenerator(plop);
  effectGenerator(plop);
  serviceGenerator(plop);
};