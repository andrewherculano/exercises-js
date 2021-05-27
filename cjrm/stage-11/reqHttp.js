const getTodosApi = (url, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    const isRequestOk = request.readyState === 4 && request.status === 200;
    const isRequestNotOk = request.readyState === 4;

    if (isRequestOk) {
      const data = JSON.parse(request.responseText)
      callback(null, data);
      return;
    }

    if (isRequestNotOk) {
      callback("Não foi possivel obter os dados da API", null);
    }
  });

  request.open("GET", url);
  request.send();
};

getTodosApi('../json/todos-0.json', (error, data) => {
  console.log(data);
  getTodosApi('../json/todos-1.json', (error, data) => {
    console.log(data)
    getTodosApi('../json/todos-2.json', (error, data) => {
      console.log(data)
    })
  })
});

