import TimeRange from "../ui/timeRange/timeRange.tsx"
import DateInput from "../ui/dateInput/dateInput.tsx"

const DeliveryDate = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-[12px]">
        <DateInput />
      </div>
      <TimeRange />
    </div>
  )
}

export default DeliveryDate
