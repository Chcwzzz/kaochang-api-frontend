/**
 * axios代码示例
 * @param url
 * @param method
 */
export const axiosExample = (url?: string, method?: string) =>
  `axios.${method}('${url}')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('请求发生错误:', error);
    });`;
export const javaExample = (url?: string, method?: string) =>
  `    @Resource
    private ApiService apiService;

    public Object request() {
        BaseResponse baseResponse;
        try {
            CurrencyRequest currencyRequest = new CurrencyRequest();
            currencyRequest.setPath("${url}");
            currencyRequest.setMethod("${method}");
            currencyRequest.setRequestParams("你的请求参数,详细请前往开发者在线文档📘查看");
            baseResponse = apiService.request(currencyRequest);
            System.out.println("data = " + baseResponse.getData());
        } catch (BusinessException e) {
            log.error(e.getMessage());
        }
        return baseResponse.getData();
    }`;
/**
 * 返回示例
 */
export const returnExample =
  '{\n' + '    "code": 0,\n' + '    "data": {} ,\n' + '    "message": "ok"\n' + '}';

export const responseParameters = [
  {
    paramName: 'code',
    type: 'int',
    description: <>返回码</>,
    required: '是',
  },
  {
    paramName: 'massage',
    type: 'string',
    description: '返回码描述',
    required: '是',
  },
  {
    paramName: 'data',
    type: 'Object',
    description: '返回数据',
    required: '是',
  },
];

export const requestParameters = [
  {
    paramName: '无',
    type: 'string',
    description: '无',
    required: '否',
  },
];
