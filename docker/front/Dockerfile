FROM node:7.10

COPY ./ssh-agent-entrypoint.sh /
RUN chmod +x /ssh-agent-entrypoint.sh
RUN yarn global add node-gyp
RUN ln -s /usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js /bin/node-gyp
RUN chmod 777 /bin/node-gyp
RUN echo yooooooooooooooolooooooooooooooooooooooooo
# https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/#install-using-the-repository
RUN apt-get -y update \
  && apt-get -y install \
     apt-transport-https \
     ca-certificates \
     curl \
     gnupg2 \
     software-properties-common \
  && curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add - 
RUN add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable" \
    && apt-get -y update \
    && apt-get -y install docker-ce

WORKDIR /project
VOLUME ["/project"]

ENTRYPOINT ["yarn"]
CMD ["start"]
