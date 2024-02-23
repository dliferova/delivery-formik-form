import { DeliveryFormValuesTypes } from "../../../types/types.ts"
import { Field, useField, useFormikContext } from "formik"
import { useEffect, useState } from "react"

const TimeRange = () => {
  const { values }: { values: DeliveryFormValuesTypes } = useFormikContext()

  const [uiFormattedTime, setUiFormattedTime] = useState<string | undefined>(
    undefined,
  )
  const [field, meta, helpers] =
    useField<DeliveryFormValuesTypes["deliveryTime"]>("deliveryTime")

  const handleFieldClick = (fromMinutes: string) => {
    helpers.setValue({
      fromMinutes: Number(fromMinutes),
      toMinutes: Number(fromMinutes) + 120,
    })
  }

  useEffect(() => {
    if (values.deliveryTime) {
      const fromHours = String(Math.floor(values.deliveryTime.fromMinutes / 60))
      const fromRemainder = String(values.deliveryTime.fromMinutes % 60)
      const toHours = String(Math.floor(values.deliveryTime?.toMinutes / 60))
      const toRemainder = String(values.deliveryTime?.toMinutes % 60)
      setUiFormattedTime(
        `${fromHours}:${fromRemainder === "0" ? "00" : fromRemainder} - ${toHours}:${toRemainder === "0" ? "00" : toRemainder}` as string,
      )
    }
  }, [values.deliveryTime])

  return (
    <>
      {values.deliveryTime && (
        <div className="input-wrapper input-wrapper--range">
          <label htmlFor="delivery-user-time-delivery" className="label-text">
            Время доставки
          </label>
          <div className="range-slider-wrapper">
            <Field
              id="delivery-user-time-delivery"
              name="deliveryTime"
              type="range"
              className="range-slider-input w-[100%]"
              value={values.deliveryTime.fromMinutes}
              onChange={(e) => handleFieldClick(e.target.value)}
              min="600"
              max="1140"
              step="20"
            />
            <output className="range-slider-tooltip">{uiFormattedTime}</output>
            <div className="range-slider-tips">
              <div className="range-slider-tip">10:00</div>
              <div className="range-slider-tip">13:00</div>
              <div className="range-slider-tip">16:00</div>
              <div className="range-slider-tip">19:00</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TimeRange
