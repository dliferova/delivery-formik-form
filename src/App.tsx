import Delivery from "./pages/delivery/Delivery.tsx"

function App() {
  return (
    <>
      <div className="w-full h-screen bg-[#f6f8fb] text-slate-950">
        <header className="w-full bg-[#67a0f6] h-10" />
        <div className="pt-[40px] pl-[20px] pr-[20px] pb-[80px]">
          <Delivery />
        </div>
      </div>
    </>
  )
}

export default App
