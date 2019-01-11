FROM finfosoft/nodejs8-alpine-httpserver

#维护者信息
MAINTAINER niuzhifa "1944044667@qq.com"

#打包后的war包放入到容器中
ADD ff-lanyue-cloud-bak.war /home/app/webapps

#改名
RUN  mv /home/app/webapps/ff-lanyue-cloud-bak.war /home/app/webapps/app.war

EXPOSE 8080

CMD ["hs"]