import {Field, FieldProps, Form, Formik} from 'formik';
import {FC, useEffect, useState} from "react";
import {cityData, deliveryPoint} from "./types.ts";

interface CustomInputProps {
    type?: string
    key: string
    title: string
    counter: number
}

const PickUpForm = () => {
    const [citiesData, setCitiesData] = useState<cityData[] | null
    >(null);

    useEffect(() => {
        fetch("https://mock.pages.academy/delivery/db")
            .then(response => response.json())
            .then((data) => {
                console.log('Data:', data)
                const formattedData = data.cities.map((item) => ({
                    id: item["id"],
                    cityId: item["city-id"],
                    city: item["city"],
                    deliveryPoints: item["delivery-points"]
                }))
                console.log('formattedData:', formattedData)
                setCitiesData(formattedData)
            })
    }, []);

    const getCityDeliveryPoints = (cityId: string): deliveryPoint[] | undefined => {
        return citiesData?.find(city => city.cityId === cityId)?.deliveryPoints
    }

    const CustomInputComponent: FC<CustomInputProps & FieldProps> = ({field, ...props}) => (
        <label
            className={`${field.checked ? "bg-blue-300 text-white" : "bg-gray-200"} pt-[12px] pb-[12px] pl-[24px] pr-[24px] mr-[3px] cursor-pointer`}
            key={props.key}>
            <input  {...field} {...props}/>
            {props.title}
        </label>
    );

    return (
        <div>
            {citiesData &&
                <>
                    <h3 className="text-xl tracking-wide mb-[16px]">Самовывоз</h3>
                    <Formik
                        initialValues={{
                            city: citiesData[0].cityId,
                            pickPoint: '',
                        }}
                        onSubmit={async (values) => {
                            console.log("Om submit event");
                            await new Promise((r) => setTimeout(r, 500));
                            alert(JSON.stringify(values, null, 2));
                        }}
                    >
                        {({values}) => (
                            <Form>
                                <div className="flex flex-col relative mb-[10px]">
                                    <div id="city-radio-group" className="mb-[12px]">
                                        <p className="text-zinc-500">Город</p>
                                    </div>
                                    <div role="group" aria-labelledby="city-radio-group"
                                         className="flex flex-row relative">
                                        {citiesData.map((item) =>
                                            <Field
                                                key={item.cityId}
                                                component={CustomInputComponent}
                                                name="city"
                                                type="radio"
                                                className={"absolute w-[1px] h-[1px] m-[-1px] outline-none"}
                                                value={item.cityId}
                                                title={item.city}
                                            />
                                        )}
                                    </div>
                                </div>

                                {getCityDeliveryPoints(values.city) &&
                                    <div className="flex flex-col relative">
                                        <div id="pickPoint-radio-group" className="mb-[12px]">
                                            <span className="text-zinc-500">Адрес пункта выдачи заказов</span>
                                        </div>
                                        <div role="group" aria-labelledby="pickPoint-radio-group"
                                             className="flex flex-row">
                                            {getCityDeliveryPoints(values.city)!.map((item) =>
                                                <Field
                                                    key={`${item.address}-key}`}
                                                    component={CustomInputComponent}
                                                    className={"absolute w-[1px] h-[1px] m-[-1px] outline-none"}
                                                    name="pickPoint"
                                                    type="radio"
                                                    value={item.address}
                                                    title={item.address}
                                                />
                                            )}
                                        </div>
                                    </div>
                                }
                            </Form>
                        )}
                    </Formik>
                </>
            }
        </div>
    );
};

export default PickUpForm;
