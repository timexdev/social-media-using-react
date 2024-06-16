import { Modal, useMantineTheme } from '@mantine/core';
import PostShare from '../component/PostShare/PostShare';

function ShareModal({modalOpened, setmodalOpened}) {
  const theme = useMantineTheme;

  return (
    <>
      <Modal
        // title="Authentication"
        overlayColor={theme.colorScheme === "dark"}
        overlayOpacity={0.05}
        overlayBlur={3}
        opened={modalOpened}
        size="55%"
        onClose={()=>setmodalOpened(false)}
      >
       <PostShare/>
      </Modal>

      {/* <Button onClick={open}>Open modal</Button> */}
    </>
  );
}


export default ShareModal