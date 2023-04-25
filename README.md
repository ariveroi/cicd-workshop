# CI CD Workshop

- Create a web application with react and typescript
- Microservices: Docker

## Docker

### When to use Docker

You can use Docker containers as a core building block creating modern applications and platforms. Docker makes it easy to build and run distributed microservices architecures, deploy your code with standardized continuous integration and delivery pipelines, build highly-scalable data processing systems, and create fully-managed platforms for your developers. The recent collaboration between AWS and Docker makes it easier for you to deploy Docker Compose artifacts to Amazon ECS and AWS Fargate.

### Run docker

Build the image

`docker build -t my-app:dev .`

Run the image

`docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 8080:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    my-app:dev
`

-it - Runs the container in interactive mode so we can execute commands inside the container while it is still running
--rm - Removes the anonymous volumes associated with the container when the container is removed
-v - Mounts a volume at a specified location
-p - Explicitly map a single port or range of ports
-e - Sets an environment variable

CHOKIDAR_USEPOLLING=true - Use polling to watch for file changes

