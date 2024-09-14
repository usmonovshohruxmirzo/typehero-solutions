type ApiRequest<a, m = "GET"> = {
  data: a;
  method: m;
};
type TSConfig<o = { strict: true }> = o;
