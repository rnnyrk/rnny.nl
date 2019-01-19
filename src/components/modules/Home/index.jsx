import React, { useState } from 'react';

import { PageLink } from 'common/Anchor';
import Dialog from 'common/Dialog';
import Page from 'common/Page';

const Home = () => {
  const [dialog, setDialog] = useState(false);

  return (
    <Page>
      <Dialog isOpen={dialog} onClose={() => setDialog(false)} />
      <button onClick={() => setDialog(true)}>
        open dialog
      </button>

      <PageLink to="/about">
        About
      </PageLink>
    </Page>
  );
}

export default Home;
