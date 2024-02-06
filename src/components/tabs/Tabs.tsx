import Banner from "../ui/banner/Banner.tsx"
import { deliveryMethodType } from "../../types/types.ts"

interface DeliveryTypeTabs {
  handleTabChange: (tabId: deliveryMethodType) => void
  activeDeliveryType: number
}

const DeliveryTypeTabs = ({
  handleTabChange,
  activeDeliveryType,
}: DeliveryTypeTabs) => {
  return (
    <div className="flex flex-row gap-6 mb-10 justify-between">
      <Banner
        title={"Самовывоз"}
        isActive={activeDeliveryType === 0}
        onClick={() => handleTabChange(0)}
      />
      <Banner
        title={"Доставка курьером"}
        isActive={activeDeliveryType === 1}
        onClick={() => handleTabChange(1)}
      />
    </div>
  )
}

export default DeliveryTypeTabs
