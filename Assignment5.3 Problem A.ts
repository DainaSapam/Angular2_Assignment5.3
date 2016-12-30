function MyMethodDecorator(
    target: Object, 
    propertyKey: string, 
    descriptor: TypedPropertyDescriptor<any>
    ) {
    console.log("MethodDecorator called on: ", target, propertyKey, descriptor);
}

class MyMethodDecoratorExercise {
    @MethodDecorator
    method() {
    }
}