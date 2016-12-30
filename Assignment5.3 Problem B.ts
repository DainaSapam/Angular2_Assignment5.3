function MyStaticMethodDecorator(
  target: Function, 
  propertyKey: string | symbol, 
  descriptor: TypedPropertyDescriptor<any>
  ) {
  console.log("StaticMethodDecorator called on: ", target, propertyKey, descriptor);
}

class MyStaticMethodDecoratorExample {
  @StaticMethodDecorator
  static staticMethod() {
  }
}