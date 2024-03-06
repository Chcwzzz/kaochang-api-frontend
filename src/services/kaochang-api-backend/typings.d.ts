declare namespace API {
  type BaseResponse = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseListUserInterfaceInfoVO_ = {
    code?: number;
    data?: UserInterfaceInfoVO[];
    message?: string;
  };

  type BaseResponseLoginUserVO_ = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponseObject_ = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageInterfaceInfoVO_ = {
    code?: number;
    data?: PageInterfaceInfoVO_;
    message?: string;
  };

  type BaseResponsePageUser_ = {
    code?: number;
    data?: PageUser_;
    message?: string;
  };

  type BaseResponsePageUserVO_ = {
    code?: number;
    data?: PageUserVO_;
    message?: string;
  };

  type BaseResponseString_ = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseUser_ = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserInterfaceInfoVO_ = {
    code?: number;
    data?: UserInterfaceInfoVO;
    message?: string;
  };

  type BaseResponseUserVO_ = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type getInterfaceInfoByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getInterfaceInfoByUrlAndMethodUsingGETParams = {
    /** method */
    method: string;
    /** url */
    url: string;
  };

  type getUserByAKUsingGETParams = {
    /** accessKey */
    accessKey?: string;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserLeftInvokesUsingGETParams = {
    /** interfaceId */
    interfaceId?: number;
    /** userId */
    userId?: number;
  };

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type IdRequest = {
    id?: number;
  };

  type InterfaceInfo = {
    createTime?: string;
    description?: string;
    id?: number;
    interfaceName?: string;
    isDelete?: number;
    method?: string;
    requestExample?: string;
    requestHeader?: string;
    requestParams?: string;
    responseHeader?: string;
    responseParams?: string;
    status?: number;
    totalInvokes?: number;
    updateTime?: string;
    url?: string;
    userId?: number;
  };

  type InterfaceInfoAddRequest = {
    description?: string;
    interfaceName?: string;
    method?: string;
    requestExample?: string;
    requestHeader?: string;
    requestParams?: RequestParams[];
    responseHeader?: string;
    responseParams?: ResponseParams[];
    url?: string;
  };

  type InterfaceInfoQueryRequest = {
    current?: number;
    description?: string;
    id?: number;
    interfaceName?: string;
    isDelete?: number;
    method?: string;
    pageSize?: number;
    requestHeader?: string;
    responseHeader?: string;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    url?: string;
    userId?: number;
  };

  type InterfaceInfoUpdateRequest = {
    description?: string;
    id?: number;
    interfaceName?: string;
    method?: string;
    requestExample?: string;
    requestHeader?: string;
    requestParams?: RequestParams[];
    responseHeader?: string;
    responseParams?: ResponseParams[];
    status?: number;
    url?: string;
  };

  type InterfaceInfoVO = {
    createTime?: string;
    description?: string;
    id?: number;
    interfaceName?: string;
    isDelete?: number;
    method?: string;
    requestExample?: string;
    requestHeader?: string;
    requestParams?: RequestParams[];
    responseHeader?: string;
    responseParams?: ResponseParams[];
    status?: number;
    totalInvokes?: number;
    updateTime?: string;
    url?: string;
    userId?: number;
  };

  type InterfaceInvokeRequest = {
    id?: number;
    method?: string;
    requestParams?: UserRequestParams[];
    url?: string;
  };

  type LoginUserVO = {
    accessKey?: string;
    createTime?: string;
    id?: number;
    secretKey?: string;
    updateTime?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageInterfaceInfoVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: InterfaceInfoVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUser_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: User[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type RequestParams = {
    description?: string;
    id?: string;
    paramName?: string;
    required?: string;
    type?: string;
  };

  type ResponseParams = {
    description?: string;
    id?: string;
    paramName?: string;
    type?: string;
  };

  type uploadFileUsingPOSTParams = {
    biz?: string;
  };

  type User = {
    accessKey?: string;
    createTime?: string;
    id?: number;
    isDelete?: number;
    secretKey?: string;
    status?: number;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userRole?: string;
  };

  type UserAddRequest = {
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type UserInterfaceInfo = {
    createtime?: string;
    id?: number;
    interfaceinfoid?: number;
    isdelete?: number;
    updatetime?: string;
    userid?: number;
    userleftinvokes?: number;
    usertotalinvokes?: number;
  };

  type UserInterfaceInfoVO = {
    createTime?: string;
    description?: string;
    id?: number;
    interfaceName?: string;
    method?: string;
    requestExample?: string;
    requestHeader?: string;
    requestParams?: string;
    responseHeader?: string;
    responseParams?: string;
    status?: number;
    updateTime?: string;
    url?: string;
    userId?: number;
    userleftinvokes?: number;
    usertotalinvokes?: number;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userName?: string;
    userRole?: string;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserRequestParams = {
    id?: string;
    paramName?: string;
    value?: Record<string, any>;
  };

  type UserUpdateMyRequest = {
    userAvatar?: string;
    userName?: string;
  };

  type UserUpdateRequest = {
    id?: number;
    status?: number;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type UserVO = {
    createTime?: string;
    id?: number;
    status?: number;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };
}
