angular.module('App')

.constant('tabsConfig', {
  "tabs": [{
    "title": "Colors",
    "vars": [
      "@gray-base",
      "@gray-darker",
      "@gray-dark",
      "@gray",
      "@gray-light",
      "@gray-lighter",
      "@brand-primary",
      "@brand-success",
      "@brand-info",
      "@brand-warning",
      "@brand-danger"
    ]
  }, {
    "title": "Scaffolding",
    "vars": [
      "@body-bg",
      "@text-color",
      "@link-color",
      "@link-hover-color",
      "@link-hover-decoration"
    ]
  }, {
    "title": "Typography",
    "vars": [
      "@font-family-sans-serif",
      "@font-family-serif",
      "@font-family-monospace",
      "@font-family-base",
      "@font-size-base",
      "@font-size-large",
      "@font-size-small",
      "@font-size-h1",
      "@font-size-h2",
      "@font-size-h3",
      "@font-size-h4",
      "@font-size-h5",
      "@font-size-h6",
      "@line-height-base",
      "@line-height-computed",
      "@headings-font-family",
      "@headings-font-weight",
      "@headings-line-height",
      "@headings-color"
    ]
  }, {
    "title": "Iconography",
    "vars": [
      "@icon-font-path",
      "@icon-font-name",
      "@icon-font-svg-id"
    ]
  }, {
    "title": "Components",
    "vars": [
      "@padding-base-vertical",
      "@padding-base-horizontal",
      "@padding-large-vertical",
      "@padding-large-horizontal",
      "@padding-small-vertical",
      "@padding-small-horizontal",
      "@padding-xs-vertical",
      "@padding-xs-horizontal",
      "@line-height-large",
      "@line-height-small",
      "@border-radius-base",
      "@border-radius-large",
      "@border-radius-small",
      "@component-active-color",
      "@component-active-bg",
      "@caret-width-base",
      "@caret-width-large"
    ]
  }, {
    "title": "Tables",
    "vars": [
      "@table-cell-padding",
      "@table-condensed-cell-padding",
      "@table-bg",
      "@table-bg-accent",
      "@table-bg-hover",
      "@table-bg-active",
      "@table-border-color"
    ]
  }, {
    "title": "Buttons",
    "vars": [
      "@btn-font-weight",
      "@btn-default-color",
      "@btn-default-bg",
      "@btn-default-border",
      "@btn-primary-color",
      "@btn-primary-bg",
      "@btn-primary-border",
      "@btn-success-color",
      "@btn-success-bg",
      "@btn-success-border",
      "@btn-info-color",
      "@btn-info-bg",
      "@btn-info-border",
      "@btn-warning-color",
      "@btn-warning-bg",
      "@btn-warning-border",
      "@btn-danger-color",
      "@btn-danger-bg",
      "@btn-danger-border",
      "@btn-link-disabled-color"
    ]
  }, {
    "title": "Forms",
    "vars": [
      "@input-bg",
      "@input-bg-disabled",
      "@input-color",
      "@input-border",
      "@input-border-radius",
      "@input-border-radius-large",
      "@input-border-radius-small",
      "@input-border-focus",
      "@input-color-placeholder",
      "@input-height-base",
      "@input-height-large",
      "@input-height-small",
      "@legend-color",
      "@legend-border-color",
      "@input-group-addon-bg",
      "@input-group-addon-border-color",
      "@cursor-disabled"
    ]
  }, {
    "title": "Dropdowns",
    "vars": [
      "@dropdown-bg",
      "@dropdown-border",
      "@dropdown-fallback-border",
      "@dropdown-divider-bg",
      "@dropdown-link-color",
      "@dropdown-link-hover-color",
      "@dropdown-link-hover-bg",
      "@dropdown-link-active-color",
      "@dropdown-link-active-bg",
      "@dropdown-link-disabled-color",
      "@dropdown-header-color",
      "@dropdown-caret-color"
    ]
  }, {
    "title": "Media queries breakpoints",
    "vars": [
      "@screen-xs",
      "@screen-xs-min",
      "@screen-phone",
      "@screen-sm",
      "@screen-sm-min",
      "@screen-tablet",
      "@screen-md",
      "@screen-md-min",
      "@screen-desktop",
      "@screen-lg",
      "@screen-lg-min",
      "@screen-lg-desktop",
      "@screen-xs-max",
      "@screen-sm-max",
      "@screen-md-max"
    ]
  }, {
    "title": "Grid system",
    "vars": [
      "@grid-columns",
      "@grid-gutter-width",
      "@grid-float-breakpoint",
      "@grid-float-breakpoint-max",
      "@container-tablet"
    ]
  }, {
    "title": "Container sizes",
    "vars": [
      "@container-sm",
      "@container-desktop",
      "@container-md",
      "@container-large-desktop",
      "@container-lg"
    ]
  }, {
    "title": "Navbar",
    "vars": [
      "@navbar-height",
      "@navbar-margin-bottom",
      "@navbar-border-radius",
      "@navbar-padding-horizontal",
      "@navbar-padding-vertical",
      "@navbar-collapse-max-height",
      "@navbar-default-color",
      "@navbar-default-bg",
      "@navbar-default-border",
      "@navbar-default-link-color",
      "@navbar-default-link-hover-color",
      "@navbar-default-link-hover-bg",
      "@navbar-default-link-active-color",
      "@navbar-default-link-active-bg",
      "@navbar-default-link-disabled-color",
      "@navbar-default-link-disabled-bg",
      "@navbar-default-brand-color",
      "@navbar-default-brand-hover-color",
      "@navbar-default-brand-hover-bg",
      "@navbar-default-toggle-hover-bg",
      "@navbar-default-toggle-icon-bar-bg",
      "@navbar-default-toggle-border-color",
      "@navbar-inverse-color",
      "@navbar-inverse-bg",
      "@navbar-inverse-border",
      "@navbar-inverse-link-color",
      "@navbar-inverse-link-hover-color",
      "@navbar-inverse-link-hover-bg",
      "@navbar-inverse-link-active-color",
      "@navbar-inverse-link-active-bg",
      "@navbar-inverse-link-disabled-color",
      "@navbar-inverse-link-disabled-bg",
      "@navbar-inverse-brand-color",
      "@navbar-inverse-brand-hover-color",
      "@navbar-inverse-brand-hover-bg",
      "@navbar-inverse-toggle-hover-bg",
      "@navbar-inverse-toggle-icon-bar-bg",
      "@navbar-inverse-toggle-border-color"
    ]
  }, {
    "title": "Navs",
    "vars": [
      "@nav-link-padding",
      "@nav-link-hover-bg",
      "@nav-disabled-link-color",
      "@nav-disabled-link-hover-color"
    ]
  }, {
    "title": "Tabs",
    "vars": [
      "@nav-tabs-border-color",
      "@nav-tabs-link-hover-border-color",
      "@nav-tabs-active-link-hover-bg",
      "@nav-tabs-active-link-hover-color",
      "@nav-tabs-active-link-hover-border-color",
      "@nav-tabs-justified-link-border-color",
      "@nav-tabs-justified-active-link-border-color"
    ]
  }, {
    "title": "Pills",
    "vars": [
      "@nav-pills-border-radius",
      "@nav-pills-active-link-hover-bg",
      "@nav-pills-active-link-hover-color"
    ]
  }, {
    "title": "Pagination",
    "vars": [
      "@pagination-color",
      "@pagination-bg",
      "@pagination-border",
      "@pagination-hover-color",
      "@pagination-hover-bg",
      "@pagination-hover-border",
      "@pagination-active-color",
      "@pagination-active-bg",
      "@pagination-active-border",
      "@pagination-disabled-color",
      "@pagination-disabled-bg",
      "@pagination-disabled-border"
    ]
  }, {
    "title": "Pager",
    "vars": [
      "@pager-bg",
      "@pager-border",
      "@pager-border-radius",
      "@pager-hover-bg",
      "@pager-active-bg",
      "@pager-active-color",
      "@pager-disabled-color"
    ]
  }, {
    "title": "Jumbotron",
    "vars": [
      "@jumbotron-padding",
      "@jumbotron-color",
      "@jumbotron-bg",
      "@jumbotron-heading-color",
      "@jumbotron-font-size"
    ]
  }, {
    "title": "Form states and alerts",
    "vars": [
      "@state-success-text",
      "@state-success-bg",
      "@state-success-border",
      "@state-info-text",
      "@state-info-bg",
      "@state-info-border",
      "@state-warning-text",
      "@state-warning-bg",
      "@state-warning-border",
      "@state-danger-text",
      "@state-danger-bg",
      "@state-danger-border"
    ]
  }, {
    "title": "Tooltips",
    "vars": [
      "@tooltip-max-width",
      "@tooltip-color",
      "@tooltip-bg",
      "@tooltip-opacity",
      "@tooltip-arrow-width",
      "@tooltip-arrow-color"
    ]
  }, {
    "title": "Popovers",
    "vars": [
      "@popover-bg",
      "@popover-max-width",
      "@popover-border-color",
      "@popover-fallback-border-color",
      "@popover-title-bg",
      "@popover-arrow-width",
      "@popover-arrow-color",
      "@popover-arrow-outer-width",
      "@popover-arrow-outer-color",
      "@popover-arrow-outer-fallback-color"
    ]
  }, {
    "title": "Labels",
    "vars": [
      "@label-default-bg",
      "@label-primary-bg",
      "@label-success-bg",
      "@label-info-bg",
      "@label-warning-bg",
      "@label-danger-bg",
      "@label-color",
      "@label-link-hover-color"
    ]
  }, {
    "title": "Modals",
    "vars": [
      "@modal-inner-padding",
      "@modal-title-padding",
      "@modal-title-line-height",
      "@modal-content-bg",
      "@modal-content-border-color",
      "@modal-content-fallback-border-color",
      "@modal-backdrop-bg",
      "@modal-backdrop-opacity",
      "@modal-header-border-color",
      "@modal-footer-border-color",
      "@modal-lg",
      "@modal-md",
      "@modal-sm"
    ]
  }, {
    "title": "Alerts",
    "vars": [
      "@alert-padding",
      "@alert-border-radius",
      "@alert-link-font-weight",
      "@alert-success-bg",
      "@alert-success-text",
      "@alert-success-border",
      "@alert-info-bg",
      "@alert-info-text",
      "@alert-info-border",
      "@alert-warning-bg",
      "@alert-warning-text",
      "@alert-warning-border",
      "@alert-danger-bg",
      "@alert-danger-text",
      "@alert-danger-border"
    ]
  }, {
    "title": "Progress bars",
    "vars": [
      "@progress-bg",
      "@progress-bar-color",
      "@progress-border-radius",
      "@progress-bar-bg",
      "@progress-bar-success-bg",
      "@progress-bar-warning-bg",
      "@progress-bar-danger-bg",
      "@progress-bar-info-bg"
    ]
  }, {
    "title": "List gorup",
    "vars": [
      "@list-group-bg",
      "@list-group-border",
      "@list-group-border-radius",
      "@list-group-hover-bg",
      "@list-group-active-color",
      "@list-group-active-bg",
      "@list-group-active-border",
      "@list-group-active-text-color",
      "@list-group-disabled-color",
      "@list-group-disabled-bg",
      "@list-group-disabled-text-color",
      "@list-group-link-color",
      "@list-group-link-hover-color",
      "@list-group-link-heading-color"
    ]
  }, {
    "title": "Panels",
    "vars": [
      "@panel-bg",
      "@panel-body-padding",
      "@panel-heading-padding",
      "@panel-footer-padding",
      "@panel-border-radius",
      "@panel-inner-border",
      "@panel-footer-bg",
      "@panel-default-text",
      "@panel-default-border",
      "@panel-default-heading-bg",
      "@panel-primary-text",
      "@panel-primary-border",
      "@panel-primary-heading-bg",
      "@panel-success-text",
      "@panel-success-border",
      "@panel-success-heading-bg",
      "@panel-info-text",
      "@panel-info-border",
      "@panel-info-heading-bg",
      "@panel-warning-text",
      "@panel-warning-border",
      "@panel-warning-heading-bg",
      "@panel-danger-text",
      "@panel-danger-border",
      "@panel-danger-heading-bg"
    ]
  }, {
    "title": "Thumbnails",
    "va@rs": [
      "@thumbnail-padding",
      "@thumbnail-bg",
      "@thumbnail-border",
      "@thumbnail-border-radius",
      "@thumbnail-caption-color",
      "@thumbnail-caption-padding"
    ]
  }, {
    "title": "Wells",
    "vars": [
      "@well-bg",
      "@well-border"
    ]
  }, {
    "title": "Badges",
    "vars": [
      "@badge-color",
      "@badge-link-hover-color",
      "@badge-bg",
      "@badge-active-color",
      "@badge-active-bg",
      "@badge-font-weight",
      "@badge-line-height",
      "@badge-border-radius"
    ]
  }, {
    "title": "Breadcrumbs",
    "vars": [
      "@breadcrumb-padding-vertical",
      "@breadcrumb-padding-horizontal",
      "@breadcrumb-bg",
      "@breadcrumb-color",
      "@breadcrumb-active-color",
      "@breadcrumb-separator"
    ]
  }, {
    "title": "Carousel",
    "vars": [
      "@carousel-text-shadow",
      "@carousel-control-color",
      "@carousel-control-width",
      "@carousel-control-opacity",
      "@carousel-control-font-size",
      "@carousel-indicator-active-bg",
      "@carousel-indicator-border-color",
      "@carousel-caption-color"
    ]
  }, {
    "title": "Close",
    "vars": [
      "@close-font-weight",
      "@close-color",
      "@close-text-shadow"
    ]
  }, {
    "title": "Code",
    "vars": [
      "@code-color",
      "@code-bg",
      "@kbd-color",
      "@kbd-bg",
      "@pre-bg",
      "@pre-color",
      "@pre-border-color",
      "@pre-scrollable-max-height"
    ]
  }, {
    "title": "Type",
    "vars": [
      "@component-offset-horizontal",
      "@text-muted",
      "@abbr-border-color",
      "@headings-small-color",
      "@blockquote-small-color",
      "@blockquote-font-size",
      "@blockquote-border-color",
      "@page-header-border-color",
      "@dl-horizontal-offset",
      "@hr-border"
    ]
  }]
});