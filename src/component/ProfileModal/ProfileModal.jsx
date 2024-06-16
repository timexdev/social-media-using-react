import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({modalOpened, setmodalOpened}) {
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
        <form className="infoForm">
            <h3>Your Information</h3>
            <div>
                <input type="text" className='infoInput' placeholder='First Name' name='firstname' />
                <input type="text" className='infoInput' placeholder='Last Name' name='lastname' />
            </div>
            <div>
            <input type="text" className='infoInput' placeholder='Works at' name='worksAt' />
            </div>
            <div>
                <input type="text" className='infoInput' placeholder='Lives In' name='livesIn' />
                <input type="text" className='infoInput' placeholder='Country' name='country' />
            </div>
            <div>
            <input type="text" className='infoInput' placeholder='Relationship Status' name='relationshipStatus' />
            </div>
            <div>
                Profile Picture
                    <input type="file"  name='profilePicture'/>
                
                Cover Image 
                    <input type="file" name='coverImage' />
            </div>
            
                <button className='button signUp-button'>Update</button>

        </form>
      </Modal>

      {/* <Button onClick={open}>Open modal</Button> */}
    </>
  );
}


export default ProfileModal