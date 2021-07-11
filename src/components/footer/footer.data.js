import Chat from 'assets/widget/chat.svg';
import Community from 'assets/widget/community.svg';
import Github from 'assets/widget/github.svg';

export default {
  widgets: [
    {
      id: 1,
      iconSrc: Chat,
      altText: 'Community',
      title: 'Grow your Community',
      description:
        '',
    },
    {
      id: 2,
      iconSrc: Community,
      altText: 'Chat',
      title: 'Connect Genuinely',
      description:
        '',
    },
    {
      id: 3,
      iconSrc: Github,
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
