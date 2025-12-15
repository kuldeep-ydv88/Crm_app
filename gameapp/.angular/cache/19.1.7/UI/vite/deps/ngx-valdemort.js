import {
  ControlContainer
} from "./chunk-ILLTRT2I.js";
import {
  NgTemplateOutlet
} from "./chunk-ED44DWJV.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Injectable,
  NgModule,
  TemplateRef,
  computed,
  contentChild,
  contentChildren,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵstyleProp,
  ɵɵtemplate
} from "./chunk-D2PHGAP6.js";
import "./chunk-ZSY7TSMJ.js";
import "./chunk-EIB7IA3J.js";

// node_modules/ngx-valdemort/fesm2022/ngx-valdemort.mjs
var _c0 = (a0, a1) => ({
  $implicit: a0,
  error: a1
});
var _c1 = (a0, a1, a2) => ({
  $implicit: a0,
  type: a1,
  error: a2
});
function ValidationErrorsComponent_Conditional_0_Conditional_0_For_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ValidationErrorsComponent_Conditional_0_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, ValidationErrorsComponent_Conditional_0_Conditional_0_For_1_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const errorDirective_r1 = ctx.$implicit;
    const vm_r2 = ɵɵnextContext(2);
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.errorClasses);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", errorDirective_r1.templateRef)("ngTemplateOutletContext", ɵɵpureFunction2(4, _c0, ctx_r2.label(), vm_r2.control.errors[errorDirective_r1.type()]));
  }
}
function ValidationErrorsComponent_Conditional_0_Conditional_0_For_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ValidationErrorsComponent_Conditional_0_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, ValidationErrorsComponent_Conditional_0_Conditional_0_For_3_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const error_r4 = ctx.$implicit;
    const vm_r2 = ɵɵnextContext(2);
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.errorClasses);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", vm_r2.errorsToDisplay.fallback.templateRef)("ngTemplateOutletContext", ɵɵpureFunction3(4, _c1, ctx_r2.label(), error_r4.type, error_r4.value));
  }
}
function ValidationErrorsComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, ValidationErrorsComponent_Conditional_0_Conditional_0_For_1_Template, 2, 7, "div", 0, ɵɵrepeaterTrackByIndex);
    ɵɵrepeaterCreate(2, ValidationErrorsComponent_Conditional_0_Conditional_0_For_3_Template, 2, 8, "div", 0, ɵɵrepeaterTrackByIndex);
  }
  if (rf & 2) {
    const vm_r2 = ɵɵnextContext();
    ɵɵrepeater(vm_r2.errorsToDisplay.errors);
    ɵɵadvance(2);
    ɵɵrepeater(vm_r2.errorsToDisplay.fallbackErrors);
  }
}
function ValidationErrorsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ValidationErrorsComponent_Conditional_0_Conditional_0_Template, 4, 0);
  }
  if (rf & 2) {
    ɵɵconditional(ctx.shouldDisplayErrors ? 0 : -1);
  }
}
var DefaultValidationErrors = class _DefaultValidationErrors {
  directives = signal([]);
  fallback = signal(void 0);
  static ɵfac = function DefaultValidationErrors_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultValidationErrors)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _DefaultValidationErrors,
    factory: _DefaultValidationErrors.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValidationErrors, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ValidationErrorDirective = class _ValidationErrorDirective {
  templateRef = inject(TemplateRef);
  /**
   * The type of the error that the content of the template must display.
   */
  type = input.required({
    alias: "valError"
  });
  static ngTemplateContextGuard(directive, context) {
    return true;
  }
  static ɵfac = function ValidationErrorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ValidationErrorDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ValidationErrorDirective,
    selectors: [["ng-template", "valError", ""]],
    inputs: {
      type: [1, "valError", "type"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValidationErrorDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[valError]"
    }]
  }], null, null);
})();
var ValidationFallbackDirective = class _ValidationFallbackDirective {
  templateRef = inject(TemplateRef);
  static ngTemplateContextGuard(directive, context) {
    return true;
  }
  static ɵfac = function ValidationFallbackDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ValidationFallbackDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ValidationFallbackDirective,
    selectors: [["ng-template", "valFallback", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValidationFallbackDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[valFallback]"
    }]
  }], null, null);
})();
var DefaultValidationErrorsDirective = class _DefaultValidationErrorsDirective {
  defaultValidationErrors = inject(DefaultValidationErrors);
  /**
   * The list of validation error directives (i.e. <ng-template valError="...">)
   * contained inside the directive element.
   */
  errorDirectives = contentChildren(ValidationErrorDirective);
  /**
   * The validation fallback directive (i.e. <ng-template valFallback>) contained inside the directive element.
   */
  fallbackDirective = contentChild(ValidationFallbackDirective);
  ngAfterContentInit() {
    this.defaultValidationErrors.directives.set(this.errorDirectives());
    this.defaultValidationErrors.fallback.set(this.fallbackDirective());
  }
  static ɵfac = function DefaultValidationErrorsDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultValidationErrorsDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DefaultValidationErrorsDirective,
    selectors: [["val-default-errors"]],
    contentQueries: function DefaultValidationErrorsDirective_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuerySignal(dirIndex, ctx.errorDirectives, ValidationErrorDirective, 4);
        ɵɵcontentQuerySignal(dirIndex, ctx.fallbackDirective, ValidationFallbackDirective, 5);
      }
      if (rf & 2) {
        ɵɵqueryAdvance(2);
      }
    },
    hostAttrs: [2, "display", "none"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValidationErrorsDirective, [{
    type: Directive,
    args: [{
      selector: "val-default-errors",
      host: {
        style: "display: none"
      }
    }]
  }], null, null);
})();
var DisplayMode;
(function(DisplayMode2) {
  DisplayMode2[DisplayMode2["ALL"] = 0] = "ALL";
  DisplayMode2[DisplayMode2["ONE"] = 1] = "ONE";
})(DisplayMode || (DisplayMode = {}));
var ValdemortConfig = class _ValdemortConfig {
  /**
   * The display mode of the errors. The default value is ALL, meaning that all the errors existing on a control
   * (and which have an error template defined) are displayed.
   */
  displayMode = DisplayMode.ALL;
  /**
   * Specifies one or several CSS classes (separated by a white space) that are automatically added to the
   * validation errors element. This can be useful to reuse a standard CSS class of your CSS framework (like
   * .invalid-feedback in BootStrap), rather than styling the val-errors element itself.
   *
   * The default value is null (no class is added).
   */
  errorsClasses = null;
  /**
   * Specifies one or several CSS classes (separated by a white space) that are automatically added to the
   * each validation error message element. This can be useful to reuse a standard CSS class of your CSS framework
   * rather than styling the div element itself.
   *
   * The default value is null (no class is added).
   */
  errorClasses = null;
  /**
   * Specifies when error messages should be displayed. based on the state of the control itself (touched, dirty, etc.)
   * and on the state of the form directive containing it (if any). This function is only called if the control is invalid
   * in the first place: if it's valid, errors are never displayed.
   *
   * The default value of this function returns true if the control is touched, or if the form (if any) is submitted.
   */
  shouldDisplayErrors = (control, form) => control.touched || !!form && form.submitted;
  /**
   * Specifies if the library should throw an error when a control is not found.
   * For example, this can happen if a typo was made in the `controlName`.
   * If the check is enabled, then an error will be thrown in such a case.
   * Otherwise, the error is silently ignored.
   *
   * The default value of this function returns false, thus disabling the check.
   *
   * You can enable the check by giving it a function that returns true,
   * or you can enable it only in development for example with:
   * `config.shouldThrowOnMissingControl = () => !environment.production`
   */
  shouldThrowOnMissingControl = () => false;
  static ɵfac = function ValdemortConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ValdemortConfig)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ValdemortConfig,
    factory: _ValdemortConfig.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValdemortConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NO_ERRORS = {
  shouldDisplayErrors: false
};
var NO_VALIDATION_STATE = {
  control: null,
  errorsDisplayed: null,
  errors: null
};
function areValidationStatesEqual(previous, current) {
  return previous.control === current.control && previous.errorsDisplayed === current.errorsDisplayed && previous.errors === current.errors;
}
var ValidationErrorsComponent = class _ValidationErrorsComponent {
  /**
   * The FormControl, FormGroup or FormArray containing the validation errors.
   * If set, the controlName input is ignored
   */
  control = input(null);
  /**
   * The name (or the index, in case it's contained in a FormArray) of the FormControl, FormGroup or FormArray containing the validation
   * errors.
   * Ignored if the control input is set, and only usable if the control to validate is part of a control container
   */
  controlName = input(null);
  /**
   * The label of the field, exposed to templates so they can use it in the error message.
   */
  label = input(null);
  /**
   * The list of validation error directives (i.e. <ng-template valError="...">) contained inside the component element.
   */
  errorDirectives = contentChildren(ValidationErrorDirective);
  /**
   * The validation fallback directive (i.e. <ng-template valFallback>) contained inside the component element.
   */
  fallbackDirective = contentChild(ValidationFallbackDirective);
  /**
   * The Config service instance, defining the behavior of this component
   */
  config = inject(ValdemortConfig);
  errorsClasses = this.config.errorsClasses || "";
  errorClasses = this.config.errorClasses || "";
  validationState = signal(NO_VALIDATION_STATE, {
    equal: areValidationStatesEqual
  });
  /**
   * The DefaultValidationErrors service instance, holding the default error templates,
   * optionally defined by using the default validation errors directive
   */
  defaultValidationErrors = inject(DefaultValidationErrors);
  /**
   * The control container, if it exists, as one of the 4 form group or form array directives that can "wrap" the control.
   * It's injected so that we can know if it exists and, if it does, if its form directive has been submitted or not:
   * the config service shouldDisplayErrors function can choose (and does by default) to use that information.
   */
  controlContainer = inject(ControlContainer, {
    optional: true
  });
  vm = computed(() => {
    const ctrl = this.validationState().control;
    if (this.shouldDisplayErrors(ctrl)) {
      const errorsToDisplay = this.findErrorsToDisplay(ctrl);
      return {
        shouldDisplayErrors: true,
        control: ctrl,
        errorsToDisplay
      };
    } else {
      return NO_ERRORS;
    }
  });
  ngDoCheck() {
    const ctrl = this.findActualControl();
    if (ctrl) {
      const formDirective = this.controlContainer?.formDirective;
      const errorsDisplayed = this.config.shouldDisplayErrors(ctrl, formDirective);
      this.validationState.set({
        control: ctrl,
        errorsDisplayed,
        errors: ctrl.errors
      });
    } else {
      this.validationState.set(NO_VALIDATION_STATE);
    }
  }
  shouldDisplayErrors(ctrl) {
    if (!ctrl || !ctrl.invalid || !this.hasDisplayableError(ctrl)) {
      return false;
    }
    const form = this.controlContainer && this.controlContainer.formDirective;
    return this.config.shouldDisplayErrors(ctrl, form ?? void 0);
  }
  findErrorsToDisplay(ctrl) {
    const mergedDirectives = [];
    const fallbackErrors = [];
    const alreadyMetTypes = /* @__PURE__ */ new Set();
    const shouldContinue = () => this.config.displayMode === DisplayMode.ALL || mergedDirectives.length === 0 && fallbackErrors.length === 0;
    const defaultValidationErrorDirectives = this.defaultValidationErrors.directives();
    for (let i = 0; i < defaultValidationErrorDirectives.length && shouldContinue(); i++) {
      const defaultDirective = defaultValidationErrorDirectives[i];
      if (ctrl.hasError(defaultDirective.type())) {
        const customDirectiveOfSameType = this.errorDirectives().find((dir) => dir.type() === defaultDirective.type());
        mergedDirectives.push(customDirectiveOfSameType || defaultDirective);
      }
      alreadyMetTypes.add(defaultDirective.type());
    }
    if (shouldContinue()) {
      const customDirectives = this.errorDirectives();
      for (let i = 0; i < customDirectives.length && shouldContinue(); i++) {
        const customDirective = customDirectives[i];
        if (ctrl.hasError(customDirective.type()) && !alreadyMetTypes.has(customDirective.type())) {
          mergedDirectives.push(customDirective);
        }
        alreadyMetTypes.add(customDirective.type());
      }
    }
    if (shouldContinue() && (this.fallbackDirective() || this.defaultValidationErrors.fallback())) {
      const allErrors = Object.entries(ctrl.errors ?? []);
      for (let i = 0; i < allErrors.length && shouldContinue(); i++) {
        const [type, value] = allErrors[i];
        if (!alreadyMetTypes.has(type)) {
          fallbackErrors.push({
            type,
            value
          });
        }
      }
    }
    return {
      errors: mergedDirectives,
      fallback: this.fallbackDirective() ?? this.defaultValidationErrors.fallback(),
      fallbackErrors
    };
  }
  findActualControl() {
    const ctrl = this.control();
    const ctrlName = this.controlName();
    if (ctrl) {
      return ctrl;
    } else if (ctrlName != null && this.controlContainer?.control?.controls) {
      const control = (this.controlContainer?.control).controls[ctrlName];
      if (this.config.shouldThrowOnMissingControl()) {
        if (!control && Object.keys(this.controlContainer?.control?.controls).length > 0) {
          throw new Error(`ngx-valdemort: no control found for controlName: '${ctrlName}'.`);
        }
      }
      return control;
    }
    return null;
  }
  hasDisplayableError(ctrl) {
    return ctrl.errors && (this.fallbackDirective() || this.defaultValidationErrors.fallback() || Object.keys(ctrl.errors).some((type) => this.defaultValidationErrors.directives().some((dir) => dir.type() === type) || this.errorDirectives().some((dir) => dir.type() === type)));
  }
  static ɵfac = function ValidationErrorsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ValidationErrorsComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ValidationErrorsComponent,
    selectors: [["val-errors"]],
    contentQueries: function ValidationErrorsComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuerySignal(dirIndex, ctx.errorDirectives, ValidationErrorDirective, 4);
        ɵɵcontentQuerySignal(dirIndex, ctx.fallbackDirective, ValidationFallbackDirective, 5);
      }
      if (rf & 2) {
        ɵɵqueryAdvance(2);
      }
    },
    hostVars: 4,
    hostBindings: function ValidationErrorsComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.errorsClasses);
        ɵɵstyleProp("display", ctx.vm().shouldDisplayErrors ? "" : "none");
      }
    },
    inputs: {
      control: [1, "control"],
      controlName: [1, "controlName"],
      label: [1, "label"]
    },
    decls: 1,
    vars: 1,
    consts: [[3, "class"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function ValidationErrorsComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, ValidationErrorsComponent_Conditional_0_Template, 1, 1);
      }
      if (rf & 2) {
        let tmp_0_0;
        ɵɵconditional((tmp_0_0 = ctx.vm()) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValidationErrorsComponent, [{
    type: Component,
    args: [{
      selector: "val-errors",
      host: {
        "[class]": "errorsClasses",
        "[style.display]": `vm().shouldDisplayErrors ? '' : 'none'`
      },
      imports: [NgTemplateOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '@if (vm(); as vm) {\n  @if (vm.shouldDisplayErrors) {\n    @for (errorDirective of vm.errorsToDisplay.errors; track $index) {\n      <div [class]="errorClasses">\n        <ng-container\n          *ngTemplateOutlet="\n            errorDirective!.templateRef;\n            context: {\n              $implicit: label(),\n              error: vm.control.errors![errorDirective.type()]\n            }\n          "\n        />\n      </div>\n    }\n    @for (error of vm.errorsToDisplay.fallbackErrors; track $index) {\n      <div [class]="errorClasses">\n        <ng-container\n          *ngTemplateOutlet="\n            vm.errorsToDisplay.fallback!.templateRef;\n            context: {\n              $implicit: label(),\n              type: error.type,\n              error: error.value\n            }\n          "\n        />\n      </div>\n    }\n  }\n}\n'
    }]
  }], null, null);
})();
var ValdemortModule = class _ValdemortModule {
  static ɵfac = function ValdemortModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ValdemortModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ValdemortModule,
    imports: [ValidationErrorsComponent, ValidationErrorDirective, ValidationFallbackDirective, DefaultValidationErrorsDirective],
    exports: [ValidationErrorsComponent, ValidationErrorDirective, ValidationFallbackDirective, DefaultValidationErrorsDirective]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValdemortModule, [{
    type: NgModule,
    args: [{
      imports: [ValidationErrorsComponent, ValidationErrorDirective, ValidationFallbackDirective, DefaultValidationErrorsDirective],
      exports: [ValidationErrorsComponent, ValidationErrorDirective, ValidationFallbackDirective, DefaultValidationErrorsDirective]
    }]
  }], null, null);
})();
export {
  DefaultValidationErrorsDirective,
  DisplayMode,
  ValdemortConfig,
  ValdemortModule,
  ValidationErrorDirective,
  ValidationErrorsComponent,
  ValidationFallbackDirective
};
//# sourceMappingURL=ngx-valdemort.js.map
