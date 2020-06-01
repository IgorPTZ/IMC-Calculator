var api_host = "http://localhost:5000"

var timer_start;
var timer_stop;

var endpoints = {
    login: { url: "/user/login/", method: "POST", auth: false },
    cadastrar: { url: "/user/", method: "POST", auth: false },
    clima: { url: "/user/service/weather/now/", method: "POST", auth: true },
    uv: { url: "/user/service/uv/", method: "POST", auth: true },
    previsao: { url: "/user/service/weather/forecast/", method: "POST", auth: true },
}



async function callAPI(service, parametros) {
    timer_start = new Date();
    let headers = {};
    if (endpoints[service] && endpoints[service].auth) {
        token = String(sessionStorage.getItem("token"));
        headers = { Authorization: `Bearer ${token}` };
    }
    let url = endpoints[service].url;
    if (endpoints[service].get_params) {
        url = url + parametros.get_params;
    }
    delete parametros.get_params;
    let response = await $.ajax({
        url: api_host + url,
        headers: headers,
        type: endpoints[service].method,
        async: true,
        timeout: 30000,
        data: JSON.stringify(parametros),
        contentType: 'application/json',
        success: function (response) {
            if (response.status === "fail") {
                console.log("erro: ", response);
                return {};
            } else {
                return response;
            }
        },
        error: function (error) {
            //alert("api error ->" + JSON.stringify(error));
            console.log("erro: ", error);
        }
    });
    print_elapsed_time(service);
    return response;
}


async function print_elapsed_time(req) {
    timer_stop = new Date();
    let elapsed = (timer_stop - timer_start) / 1000;


    console.log('Tempo do request: ' + req + ' -> ' + elapsed + 's');
}