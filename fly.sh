
docker rm -f gitbook || echo gitbook not exists;
docker run -itd \
--privileged=true \
-v `pwd`:/src \
-p 8089:8089 \
--name gitbook \
node:8.9.4 \
/bin/bash -c " gitbook serve book --port 8080"
