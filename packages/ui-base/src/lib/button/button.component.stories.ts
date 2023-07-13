import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { LoggerTestingModule } from 'ngx-logger/testing';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'Base/Button',
  component: ButtonComponent,
  argTypes: {
    btnId: {
      description: 'Button Id',
      defaultValue: '1',
      control: {
        type: 'text',
      },
    },
    btnLable: {
      description: 'Click me',
      control: {
        type: 'text',
      },
    },
    displayClass: {
      description: 'Button display class',
      defaultValue: 'primary',

      control: {
        type: 'select',

        options: [
          'primary',
          'secondary',
          'accent',
          'success',
          'warn',
          'error',
          'muted',
        ],
      },
    },
    displayType: {
      description: 'Button display yype',
      defaultValue: 'flat',

      control: {
        type: 'select',

        options: ['basic', 'flat', 'outline'],
      },
    },
    btnMode: {
      description: 'Button Mode',
      defaultValue: 'click',

      control: {
        type: 'select',

        options: ['link', 'click', 'dialog', 'modal'],
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
          'accent',
          'success',
          'warn',
          'error',
          'muted',
        ],
      },
    },
    badgeAlign: {
      description: 'Badge Align',

      control: {
        type: 'select',

        options: [
          'inline',
          'top',
          'top-right',
          'bottom',
          'left',
          'right',
          'center',
        ],
      },
    },
    btnSize: {
      description: 'Button Size',
      defaultValue: 'med',

      control: {
        type: 'select',

        options: ['xsmall', 'small', 'med', 'medium', 'large'],
      },
    },
    btnRadius: {
      description: 'Button Radius',
      defaultValue: 'med',

      control: {
        type: 'select',

        options: ['small', 'med', 'large', 'none'],
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
    applicationConfig({
      providers: [importProvidersFrom(LoggerTestingModule)],
    }),
  ],
} as Meta;

// export default {
//   title: 'ButtonComponent',
//   component: ButtonComponent,
// } as Meta<ButtonComponent>;

// export default meta;
// type Story = StoryObj<ButtonComponent>;

// const Template: StoryObj<ButtonComponent> = (args: ButtonComponent) => ({
//   props: args,
// });

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/angular/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Primary = {
//   render: (args: ButtonComponent) => ({
//     props: args,
//   }),
//   args: {
//     btnId: '',
//     btnLable: '',
//     displayClass: 'primary',
//     displayType: 'flat',
//     btnMode: 'click',
//     btnHelp: '',
//     badgeLable: '',
//     badgeDisplayClass: '',
//     badgeAlign: 'inline',
//     btnSize: 'med',
//     btnRadius: 'med',
//     disabled: false,
//     type: 'button',
//   },
// };
