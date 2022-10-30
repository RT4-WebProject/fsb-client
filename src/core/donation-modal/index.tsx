import { useState, useContext, createContext, useMemo } from 'react'
import { Modal, Button, Group } from '@mantine/core'
import { DonationForm } from './form'

interface IContext {
  opened: boolean
  setOpened: any
}

const Context = createContext<IContext>({
  opened: false,
  setOpened: () => {},
})

export function useModal() {
  return useContext(Context)
}

export function ModalProvider({ children }) {
  const [opened, setOpened] = useState(false)
  const [campaign, setCampaign] = useState<null | string>(null)
  const [agency, setAgency] = useState<null | string>(null)
  const [title, setTitle] = useState<null | string>(null)

  const value = useMemo(
    () => ({ opened, setOpened, setCampaign, setAgency, setTitle }),
    [opened, setOpened, setCampaign, setAgency, setTitle]
  )

  return (
    <>
      <Context.Provider value={value}>
        <Modal opened={opened} onClose={() => setOpened(false)} title="Donate">
          <DonationForm campaign={campaign} agency={agency} title={title} />
        </Modal>
        {children}
      </Context.Provider>
    </>
  )
}
