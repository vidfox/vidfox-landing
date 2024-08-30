import Chat from 'assets/widget/chat.svg';
import Community from 'assets/widget/community.svg';
import Github from 'assets/widget/github.svg';
import Yes from 'assets/widget/yes.svg';
import Cash from 'assets/widget/cash.svg';
import From from 'assets/widget/form.svg';
import Database from 'assets/widget/database.svg';

export default {
  widgets: [
    {
      id: 1,
      iconSrc: From,
      altText: 'Forms',
      title: 'Dynamic forms',
      description:
        '',
    },
    {
      id: 2,
      iconSrc: Community,
      altText: 'Customers',
      title: 'Manage customers',
      description:
        '',
    },
    {
      id: 3,
      iconSrc: Cash,
      altText: 'Cash',
      title: 'Accept payments',
      description:
        '',
    },
    {
      id: 4,
      iconSrc: Yes,
      altText: 'Approve',
      title: 'Approve Steps',
      description:
        '',
    },
    {
      id: 5,
      iconSrc: Chat,
      altText: 'Details',
      title: 'Request Details',
      description:
        '',
    },
    {
      id: 6,
      iconSrc: Database,
      altText: 'Github',
      title: 'Keep your data safe',
      description:
        '',
    },
  ],
  menuItem: [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/privacy',
      label: 'Privacy',
    },
    {
      path: '/terms',
      label: 'Terms and Conditions',
    },
    {
      path: '',
      label: 'Release Notes',
      onClick: () => {
        window.open("https://www.notion.so/Release-Notes-fa9a5589597c4adfbbc469ae3c6fbe8a");
      },
    },
    // {
    //   path: '',
    //   label: 'Contact',
    //   onClick: () => {
    //     window.open("https://www.notion.so/Release-Notes-fa9a5589597c4adfbbc469ae3c6fbe8a");
    //   },
    // },
  ],
};
