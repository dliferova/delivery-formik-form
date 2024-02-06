import { useState } from "react"
import DeliveryTypeTabs from "../../components/tabs/Tabs.tsx"
import DeliveryForm from "../../components/form/DeliveryForm.tsx"
import { deliveryMethodType } from "../../types/types.ts"

const Delivery = () => {
  const [activeDeliveryType, setActiveDeliveryType] =
    useState<deliveryMethodType>(0)

  const onDeliveryTabChange = (tabId: deliveryMethodType) => {
    setActiveDeliveryType(tabId)
  }

  return (
    <main className="w-[920px] pt-[64px] pb-[80px] pl-[76px] pr-[76px] m-auto bg-white">
      <h1 className="hidden">Оформление заказа</h1>
      <div>
        <h2 className="text-4xl font-bold mb-8">
          Выберите способ получения товара
        </h2>
        <DeliveryTypeTabs
          handleTabChange={onDeliveryTabChange}
          activeDeliveryType={activeDeliveryType}
        />
        <DeliveryForm activeDeliveryType={activeDeliveryType} />
      </div>
    </main>
  )
}

export default Delivery
