package com.bear.mvcassignment.filter;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfiguration {

    @Bean
    public FilterRegistrationBean<LoggingFilter> logigingFilterRegistrationBean(){

        FilterRegistrationBean<LoggingFilter> loggingFilterBean = new FilterRegistrationBean<>();

        loggingFilterBean.setFilter(new LoggingFilter());  // Filter 객체를 Servlet Container에 등록
        loggingFilterBean.addUrlPatterns("/reservations/*", "/filter/*");
        loggingFilterBean.setOrder(1);
        loggingFilterBean.setName("/reservationsLogging/");

        return loggingFilterBean;
    };

    @Bean
    public FilterRegistrationBean<VarificationFilter> varificationFilterRegistrationBean() {

        FilterRegistrationBean<VarificationFilter> varificationBean = new FilterRegistrationBean<>();

        varificationBean.setFilter(new VarificationFilter());
        varificationBean.addUrlPatterns("/reservations/block", "/filter/block");
        varificationBean.setOrder(2);
        varificationBean.setName("/reservationsVarification");

        return varificationBean;
    }
}
