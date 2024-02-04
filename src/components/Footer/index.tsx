import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';
const currentYear = new Date().getFullYear();
const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        marginTop: '-3vh',
        background: 'none',
      }}
      links={[
        {
          key: '烤肠API',
          title: '烤肠API分享平台',
          href: 'https://github.com/Chcwzzz/kaochang-api-frontend',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/Chcwzzz',
          blankTarget: true,
        },
        {
          key: 'Chcwzzz',
          title: 'By Chcwzzz',
          href: 'https://github.com/Chcwzzz',
          blankTarget: true,
        },
      ]}
      copyright={`${currentYear} Chcwzzz 独立制作`}
    />
  );
};

export default Footer;
