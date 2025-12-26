# ---------- Build stage ----------
FROM maven:3.9.8-eclipse-temurin-21 AS build

WORKDIR /app

COPY pom.xml .

RUN mvn -B -DskipTests dependency:go-offline

# copy sources and build
COPY src ./src

RUN mvn -B -DskipTests package

# ---------- Runtime stage ----------
FROM eclipse-temurin:21-jre-jammy

# create non-root user 
RUN useradd -ms /bin/bash appuser

WORKDIR /app

# copy jar from build stage and set ownership to appuser 
COPY --from=build --chown=appuser:appuser /app/target/*.jar /app/app.jar

# switch to non-root user
USER appuser

# default server port - can be overridden by env on docker run
ENV SERVER_PORT=8081

EXPOSE 8081

# use exec form so signals are forwarded correctly
ENTRYPOINT ["sh","-c","exec java -Dserver.port=${SERVER_PORT} -jar /app/app.jar"]
