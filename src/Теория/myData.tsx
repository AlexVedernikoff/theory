// Мои утилиты для работы с датой
export class myData {
  // Возвращает количество полных недель между двумя датами
  static getFullWeeksDiff(from: string, to: string) {
    const [fromDate, toDate] = [
      new Date(from).getTime(),
      new Date(to).getTime(),
    ];

    const fullWeeks = Math.floor((toDate - fromDate) / (24 * 3600 * 1000 * 7));

    console.log(
      `Количество полных недель между датой ${from} и ${to}`,
      fullWeeks
    );
    return fullWeeks;
  }
}

// *** Теория ***
// https://translated.turbopages.org/proxy_u/en-ru.ru.659fd8d7-655d16c3-44718283-74722d776562/https/stackoverflow.com/questions/7763327/how-to-calculate-date-difference-in-javascript
