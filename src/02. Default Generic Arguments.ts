type ApiRequest<a = 200, m = "GET"> = {
  data: a;
  method: m;
};

type TSConfig<o = { strict: true }> = o;

const postRequest: ApiRequest<number, "POST"> = {
  data: 123,
  method: "POST",
};
