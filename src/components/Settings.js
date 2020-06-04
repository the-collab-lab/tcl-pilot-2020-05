import React from 'react';
import {Modal, Button} from 'react-materialize';


const SettingsModal = () => {

    return (
        <Modal
        actions={[
            <Button flat modal="close" node="button" waves="green">Close</Button>
          ]}
          bottomSheet={false}
          fixedFooter={false}
          header="Modal Header"
          id="Modal-0"
          open={true}
          options={{
            dismissible: true,
            endingTop: '10%',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            opacity: 0.5,
            outDuration: 250,
            preventScrolling: true,
            startingTop: '4%'
          }}
        //   root={[object HTMLBodyElement]}
          trigger={<Button node="button">MODAL</Button>}
        >
            <p>TEST</p>
        </Modal>
    )
}

export default SettingsModal;