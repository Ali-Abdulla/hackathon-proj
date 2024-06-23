import { Stack } from "@mui/material";
import Header from "../components/header"
import { HStack } from "../components/HStack";
import { Label16, Label16Bold, Label24, Label30 } from "../components/labels";
import { ButtonSmall } from "../components/buttons";

const MyAccounts: React.FC = () => {

  return (
    <div style={{ background: '#F9FAFB' }}>
      <Header />
      <div style={{ paddingTop: '3ch', paddingLeft: '15ch', paddingRight: '15ch', paddingBottom: '3ch' }}>
        <Stack gap={3}>
          <HStack>
            <div style={{ marginRight: 'auto' }}>
              <Label30 text="My accounts"></Label30>
            </div>
            <ButtonSmall>
              <div style={{ color: 'white' }}>
                <Label16Bold text="Add account"></Label16Bold>
              </div>
            </ButtonSmall>
          </HStack>
          <HStack>
            <div style={{ backgroundColor: 'white', borderRadius: '1ch', padding: '1ch', marginRight: '2ch' }}>
              <Stack>
                <HStack>
                  <div style={{ marginRight: 'auto' }}>
                    <Label24 text="Build.ua"></Label24>
                  </div>
                  <div style={{color: '#4B5563'}}>
                  <Label16Bold text="Deactivate"></Label16Bold>
                  </div>
                </HStack>
                <HStack>
                  <div style={{ color: '#4B5563', marginRight: '1ch' }}>
                    <Label16 text="Date added: "></Label16>
                  </div>
                  <Label16Bold text="12.04.2024"></Label16Bold>
                </HStack>
                <HStack>
                  <div style={{ color: '#4B5563', marginRight: '1ch' }}>
                    <Label16 text="Address: "></Label16>
                  </div>
                  <Label16Bold text="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"></Label16Bold>
                </HStack>
              </Stack>
            </div>
            <div style={{ backgroundColor: 'white', borderRadius: '1ch', padding: '1ch' }}>
              <Stack>
                <HStack>
                  <div style={{ marginRight: 'auto' }}>
                    <Label24 text="Puppy.com"></Label24>
                  </div>
                  <div style={{color: '#4B5563'}}>
                  <Label16Bold text="Deactivate"></Label16Bold>
                  </div>
                </HStack>
                <HStack>
                  <div style={{ color: '#4B5563', marginRight: '1ch' }}>
                    <Label16 text="Date added: "></Label16>
                  </div>
                  <Label16Bold text="12.04.2024"></Label16Bold>
                </HStack>
                <HStack>
                  <div style={{ color: '#4B5563', marginRight: '1ch' }}>
                    <Label16 text="Address: "></Label16>
                  </div>
                  <Label16Bold text="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"></Label16Bold>
                </HStack>
              </Stack>
            </div>
          </HStack>
        </Stack>
      </div>
    </div>
  )
}

export default MyAccounts;