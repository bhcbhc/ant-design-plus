import React from 'react';
import { Layout, Icon } from 'antd';
import styles from './footer.module.less';

const { Footer } = Layout;

const FooterView: React.FC = () => {
  return (
    <Footer className={styles.footer}>
      <div className={styles.copyright}>
        Copyright <Icon type="copyright" /> 2019 SENSORO Co.,Ltd
      </div>

    </Footer>
  )
};

export default FooterView;
