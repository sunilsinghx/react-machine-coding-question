
import CollapsiblePanel from './components/CollapsiblePanel'

function App() {

  return (
    <>
        <CollapsiblePanel title={"This is Title1"} initialCollapse={false}>
          This is content loren 1
        </CollapsiblePanel>
        <CollapsiblePanel title={"This is Title2"}>
          This is content loren 2
        </CollapsiblePanel>
    </>
  )
}

export default App
