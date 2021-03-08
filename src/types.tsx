export interface Flight {
    "dateFlight": string, // Дата рейса
    "flight": string, // Номер рейса
    "plnType": string, // Тип воздушного судна
    "pln": string, // Бортовой номер воздушного судна
    "timeFlight": number, // Время налета (с момента взлета до посадки)
    "timeBlock": number, // Полетное время (время налета + руление и работа двигателя на земле)
    "timeNight": number, // Ночное летное время (является частью налета)
    "timeBiologicalNight": number, // Биологическая ночь
    "timeWork": number, // Рабочее время (полетное время + предполетная и послеполетная подготовка)
    "type": number, // Тип записи (0 - фактический налет, 1 - плановый)
    "takeoff": {
        "name": string, // Аэропорт вылета
        "lat": number, // Широта
        "long": number // Долгота
    },
    "landing": {
        "name": string, // Аэропорт посадки
        "lat": number, // Широта
        "long": number // Долгота
    }
}

export type Flights = ReadonlyArray<Flight>;
