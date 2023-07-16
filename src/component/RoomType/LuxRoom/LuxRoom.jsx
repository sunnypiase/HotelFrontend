import RoomType from "../RoomType";

const LuxRoom = () => {
    const description = [
        'Двоспальне ліжко',
        'Розкладний двоспальний диван',
        'Холодильник',
        'Телевізор',
        'Душ',
        'Кондиціонер',
        'Безкоштовне місце на парковці'
    ]
    const price = [
        '1-2 людини - 1200',
        '3-4 людини - 1400'
    ]


    return <RoomType
        title='Двокімнатний люкс'
        description={description}
        price={price}
    />
}

export default LuxRoom