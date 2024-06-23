import { Stack } from "@mui/material";
import Header from "../components/header";
import { Label14, Label16Bold, Label18, Label30 } from "../components/labels";
import { HStack } from "../components/HStack";
import { ButtonSmall } from "../components/buttons";
import { useState } from "react";

const Mint: React.FC = () => {
  
  const [isFirstMint, setIsFirstMint] = useState<boolean>(false);
  const [isSecondMint, setIsSecondMint] = useState<boolean>(false);

  return (
    <div style={{ background: '#F9FAFB' }}>
      <Header />
      <div style={{ paddingTop: '3ch', paddingLeft: '15ch', paddingRight: '15ch', paddingBottom: '3ch' }}>
        <Stack gap={3}>
          <Label30 text="Minting" />
          <div style={{backgroundColor: 'white', padding: '2ch', borderRadius: '2ch'}}>
            <HStack>
              <img src="../service-image.png" style={{ width: '6ch', height: '6ch', marginRight: '1ch' }}></img>
              <div style={{ marginRight: 'auto' }}>
                <Stack gap={1.5}>
                  <Label18 text="Detective services" />
                  <Label14 text="I have a great experience in the investigation" />
                </Stack>
              </div>
              {
                isFirstMint ?
                <ButtonSmall>
                <div style={{color: 'white'}}>
                <Label16Bold text="Pay service"/>
                </div>
              </ButtonSmall>
                :
                <div onClick={() => setIsFirstMint(true)}>
                  <ButtonSmall>
                <div style={{color: 'white'}}>
                <Label16Bold text="Mint NFT"/>
                </div>
              </ButtonSmall>
                </div>
              }
            </HStack>
          </div>
          <div style={{backgroundColor: 'white', padding: '2ch', borderRadius: '2ch'}}>
            <HStack>
              <img src="../service-image.png" style={{ width: '6ch', height: '6ch', marginRight: '1ch' }}></img>
              <div style={{ marginRight: 'auto' }}>
                <Stack gap={1.5}>
                  <Label18 text="Detective services" />
                  <Label14 text="I have a great experience in the investigation" />
                </Stack>
              </div>
              {
                isSecondMint ?
                <ButtonSmall>
                <div style={{color: 'white'}}>
                <Label16Bold text="Pay service"/>
                </div>
              </ButtonSmall>
                :
                <div onClick={() => setIsSecondMint(true)}>
                  <ButtonSmall>
                <div style={{color: 'white'}}>
                <Label16Bold text="Mint NFT"/>
                </div>
              </ButtonSmall>
                </div>
              }
            </HStack>
          </div>
        </Stack>
      </div>
    </div>
  );
};

export default Mint;