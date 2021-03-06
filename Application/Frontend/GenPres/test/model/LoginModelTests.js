Ext.define('GenPres.test.model.LoginModelTests', {

    describe: 'GenPres.model.user.Login',

    tests: function () {
        var getLoginModel, model, createLoginModel, setValidationRules, applyValidationRules;

        createLoginModel = function () {
            return Ext.create('GenPres.model.user.Login');
        }

        getLoginModel = function () {
            if (!Ext.ModelManager.getModel('GenPres.model.user.Login')) {
                createLoginModel();
            }
            return Ext.ModelManager.getModel('GenPres.model.user.Login');
        }


        it('UserLoginModel should be registered', function () {
            expect(getLoginModel()).toBeDefined();
        });

    /*  ToDo: Does not pass, returns: this.persistanceProperty is undefined in Ext 26557
        it('After load an instance of LoginModel should be created', function () {
            getLoginModel().load('', {
                callback: function (result) {
                    model = result || {};
                }
            });

            waitsFor(function () {
                return model;
            }, 'creation of LoginModel by loading', 1000);
        });
    */

        it('LoginModel should be instantiated by Ext.create', function () {
            model = createLoginModel();

            expect(model).toBeDefined();
            model = null;
        });


    /*  ToDo: Does not pass, returns: this.persistanceProperty is undefined in Ext 26557
        it('An empty instance of LoginModel should be invalid', function () {
            model = createLoginModel();

            if (model.validations.length === 0) setValidationRules(model);
            model.validate();

            expect(model.isValid()).toBe(false);

            model.validations = null;
            model = null;
        });
    */

    /*  ToDo: Does not pass, returns: this.persistanceProperty is undefined in Ext 26557
        it('After login attempt LoginModel should be returned with validation rules', function () {
            getLoginModel().load('', {
                callback: function (result) {
                    model = result || {};
                }
            })

            waitsFor(function () {
                var isRule = false;
                if (model) {
                    model.validationRules().each(function (rule) {
                        console.log(rule);
                        isRule = true;
                    })
                }

                return isRule;
            }, 'Validation rules', 1000);
        });
    */



    /*  ToDo: Does not pass, returns: this.persistanceProperty is undefined in Ext 26557
        it('After login attempt LoginModel should be updated with server side supplied validations', function () {
            model = null;
            getLoginModel().load('', {
                callback: function (result) {
                    model = result;
                    model.validations = [];
                    applyValidationRules(model);
                }
            });

            waitsFor(function () {
                if (model) {
                    if (model.validations) {
                        if (model.validations.length === 2) return true;
                    }
                }
                return false;
            }, 'waiting for server supplied values', 1000);

        });
    */

    }
});