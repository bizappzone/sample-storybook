import { Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { LoggerTestingModule } from 'ngx-logger/testing';
import { importProvidersFrom } from '@angular/core';

const meta: Meta = {
  title: 'ButtonComponent',
  component: ButtonComponent,
  // imports: [LoggerTestingModule],

  argTypes: {
    btnId: {
      description: 'Button Id',
      defaultValue: '',

      control: {
        type: 'text',
      },
    },
    btnLable: {
      description: 'Button Lable',

      control: {
        type: 'text',
      },
    },
    displayClass: {
      description: 'Button Display Class',
      defaultValue: 'primary',

      control: {
        type: 'select',

        options: [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
          'link',
        ],
      },
    },
    displayType: {
      description: 'Button Display Type',
      defaultValue: 'flat',

      control: {
        type: 'select',

        options: ['flat', 'raised', 'stroked', 'icon', 'fab', 'miniFab'],
      },
    },
    btnMode: {
      description: 'Button Mode',
      defaultValue: 'click',

      control: {
        type: 'select',

        options: ['click', 'toggle'],
      },
    },
    btnHelp: {
      description: 'Button Help',
      defaultValue: '',
      control: {
        type: 'text',
      },
    },
    badgeLable: {
      description: 'Badge Lable',
      defaultValue: '',
      control: {
        type: 'text',
      },
    },
    badgeDisplayClass: {
      description: 'Badge Display Class',
      defaultValue: '',
      control: {
        type: 'select',

        options: [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
          'link',
        ],
      },
    },
    badgeAlign: {
      description: 'Badge Align',

      control: {
        type: 'select',

        options: [
          'inline',
          'top-left',
          'top-right',
          'bottom-left',
          'bottom-right',
        ],
      },
    },
    btnSize: {
      description: 'Button Size',
      defaultValue: 'med',

      control: {
        type: 'select',

        options: ['sm', 'med', 'lg'],
      },
    },
    btnRadius: {
      description: 'Button Radius',
      defaultValue: 'med',

      control: {
        type: 'select',

        options: ['sm', 'med', 'lg'],
      },
    },
    disabled: {
      description: 'Disabled',
      defaultValue: false,

      control: {
        type: 'boolean',
      },
    },
    type: {
      description: 'Type',
      defaultValue: 'button',

      control: {
        type: 'select',

        options: ['button', 'submit', 'reset'],
      },
    },
  },
  decorators: [
    // (story) => ({
    //   template: `<div style="margin: 3em">${story()}</div>`,
    // }),
    applicationConfig({
      providers: [importProvidersFrom(LoggerTestingModule)],
    }),
  ],
};

// export default {
//   title: 'ButtonComponent',
//   component: ButtonComponent,
// } as Meta<ButtonComponent>;

export default meta;
type Story = StoryObj<typeof ButtonComponent>;

export const Primary = {
  render: (args: ButtonComponent) => ({
    props: args,
  }),
  args: {
    btnId: '',
    btnLable: '',
    displayClass: 'primary',
    displayType: 'flat',
    btnMode: 'click',
    btnHelp: '',
    badgeLable: '',
    badgeDisplayClass: '',
    badgeAlign: 'inline',
    btnSize: 'med',
    btnRadius: 'med',
    disabled: false,
    type: 'button',
  },
};
