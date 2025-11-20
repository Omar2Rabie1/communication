    const questions = [
      {
        id: 1,
        type: "mcq",
        question: "What is a Class defined as in OOP?",
        options: [
          "An instance of an object",
          "A method that runs when an object is created",
          "The blueprint for an object, specifying its fields and methods",
          "A variable that references a subclass object"
        ],
        answer: 2
      },
      {
        id: 2,
        type: "mcq",
        question: "An object in Java is:",
        options: [
          "A variable that stores functions",
          "An instance of a class",
          "A class definition",
          "A data type"
        ],
        answer: 1
      },
      {
        id: 3,
        type: "mcq",
        question: "Which special method is automatically called when an object is created?",
        options: [
          "Overridden method",
          "Standard Library method",
          "Constructor",
          "toString() method"
        ],
        answer: 2
      },
      {
        id: 4,
        type: "mcq",
        question: "What is the defining characteristic of Method Overloading?",
        options: [
          "A subclass providing an implementation for a superclass method.",
          "Two or more methods having the same name but different parameter lists.",
          "A superclass reference variable referencing a subclass object.",
          "Inheriting members from an existing class."
        ],
        answer: 1
      },
      {
        id: 5,
        type: "mcq",
        question: "What mechanism allows a new class to extend an existing class and inherit its members?",
        options: [
          "Polymorphism",
          "Overriding",
          "Interface",
          "Inheritance"
        ],
        answer: 3
      },
      {
        id: 6,
        type: "mcq",
        question: "When a subclass provides a specific implementation of a method already in its superclass, this is called:",
        options: [
          "Method Overloading",
          "Constructor Overloading",
          "Method Overriding",
          "Polymorphism"
        ],
        answer: 2
      },
      {
        id: 7,
        type: "mcq",
        question: "What is the purpose of an Interface?",
        options: [
          "To implement all methods for a class.",
          "To create an object blueprint with fields and methods.",
          "To specify the behavior for a class without implementing it.",
          "To automatically initialize object attributes."
        ],
        answer: 2
      },
      {
        id: 8,
        type: "mcq",
        question: "The toString() method is a default method in every class, but it is typically overridden to:",
        options: [
          "Prevent method overloading.",
          "Provide a custom implementation that does what the developer wants.",
          "Force a superclass reference to a subclass object.",
          "Automatically call the constructor."
        ],
        answer: 1
      },
      {
        id: 9,
        type: "mcq",
        question: "What is a Method defined as?",
        options: [
          "A field that holds data.",
          "A block of code that runs only when it is called.",
          "An object's initial value.",
          "A blueprint for a class."
        ],
        answer: 1
      },
      {
        id: 10,
        type: "mcq",
        question: "Methods that are built-in and readily available for use in a language like Java are called:",
        options: [
          "User-defined Methods",
          "Constructor Methods",
          "Abstract Methods",
          "Standard Library Methods"
        ],
        answer: 3
      },
      {
        id: 11,
        type: "mcq",
        question: "Methods that a programmer defines inside a class as per their needs are called:",
        options: [
          "Standard Library Methods",
          "User-defined Methods",
          "Default Methods",
          "Overridden Methods"
        ],
        answer: 1
      },
      {
        id: 12,
        type: "mcq",
        question: "What is the role of a Constructor?",
        options: [
          "To perform an action when called by a method.",
          "To specify the behavior of an interface.",
          "To initialize objects.",
          "To inherit fields from a superclass."
        ],
        answer: 2
      },
      {
        id: 13,
        type: "mcq",
        question: "When is a Constructor called?",
        options: [
          "When a subclass extends a superclass.",
          "When a method is overloaded.",
          "When a method is called with parameters.",
          "When an object of a class is created."
        ],
        answer: 3
      },
      {
        id: 14,
        type: "mcq",
        question: "A class can be used to create:",
        options: [
          "Only one object.",
          "Only one constructor.",
          "One or more objects.",
          "Only standard library methods."
        ],
        answer: 2
      },
      {
        id: 15,
        type: "mcq",
        question: "What is the mechanism in OOP where one object acquires all the properties and behaviors of a parent object?",
        options: [
          "Encapsulation",
          "Abstraction",
          "Inheritance",
          "Polymorphism"
        ],
        answer: 2
      },
      {
        id: 16,
        type: "mcq",
        question: "Inheritance primarily represents which type of relationship in OOP?",
        options: [
          "HAS-A relationship",
          "IS-A relationship",
          "USES-A relationship",
          "Depends-on relationship"
        ],
        answer: 1
      },
      {
        id: 17,
        type: "mcq",
        question: "What is the main advantage of using inheritance regarding existing code?",
        options: [
          "Runtime Polymorphism",
          "Abstraction",
          "Code Reusability",
          "Method Overloading"
        ],
        answer: 2
      },
      {
        id: 18,
        type: "mcq",
        question: "Which OOP feature is achievable only through Inheritance and is one way Java achieves Run Time Polymorphism?",
        options: [
          "Method Overloading",
          "Method Overriding",
          "Encapsulation",
          "Constructor"
        ],
        answer: 1
      },
      {
        id: 19,
        type: "mcq",
        question: "What is the purpose of the extends keyword in Java inheritance?",
        options: [
          "To implement an Interface",
          "To prevent method overriding",
          "To indicate that a new class derives from an existing class",
          "To call the superclass's constructor"
        ],
        answer: 2
      },
      {
        id: 20,
        type: "mcq",
        question: "Which type of inheritance involves one class inheriting from multiple classes?",
        options: [
          "Single Inheritance",
          "Multilevel Inheritance",
          "Hierarchical Inheritance",
          "Multiple Inheritance"
        ],
        answer: 3
      },
      {
        id: 21,
        type: "mcq",
        question: "Which types of inheritance are supported in Java on the basis of classes?",
        options: [
          "Multiple, Hybrid, Single",
          "Single, Multilevel, Hierarchical",
          "Single, Multiple, Hybrid",
          "Hybrid, Hierarchical, Multiple"
        ],
        answer: 1
      },
      {
        id: 22,
        type: "mcq",
        question: "How is Multiple Inheritance supported in Java programming?",
        options: [
          "By using the extends keyword multiple times.",
          "It is fully supported by classes.",
          "By using interfaces only.",
          "By defining a special constructor."
        ],
        answer: 2
      },
      {
        id: 23,
        type: "mcq",
        question: "Why does Java not support multiple inheritance through classes?",
        options: [
          "To increase code reusability.",
          "To reduce complexity and simplify the language.",
          "To enforce static method binding.",
          "To promote encapsulation."
        ],
        answer: 1
      },
      {
        id: 24,
        type: "mcq",
        question: "Which term facilitates reusing the fields and methods of an existing class when creating a new class?",
        options: [
          "Polymorphism",
          "Reusability",
          "Abstraction",
          "Overriding"
        ],
        answer: 1
      },
      {
        id: 25,
        type: "mcq",
        question: "Which access modifier prevents a superclass member from being inherited and directly available to a subclass?",
        options: [
          "private",
          "default (package-private)",
          "protected",
          "public"
        ],
        answer: 0
      },
      {
        id: 26,
        type: "mcq",
        question: "Which access modifier allows members to be inherited by a derived class and accessed from anywhere?",
        options: [
          "private",
          "protected",
          "default",
          "public"
        ],
        answer: 3
      },
      {
        id: 27,
        type: "mcq",
        question: "If you do not specify any access level for a member in Java, what will be its access modifier?",
        options: [
          "public",
          "private",
          "protected",
          "default"
        ],
        answer: 3
      },
      {
        id: 28,
        type: "mcq",
        question: "Polymorphism is defined as the ability to perform:",
        options: [
          "An action in only one way.",
          "The same action in many different ways.",
          "Different actions with the same method name.",
          "Actions that are only specific to the parent class."
        ],
        answer: 1
      },
      {
        id: 29,
        type: "mcq",
        question: "What are the two different methods used to perform Polymorphism in Java?",
        options: [
          "Inheritance and Abstraction",
          "Encapsulation and Overloading",
          "Method Overloading and Method Overriding",
          "Static methods and Instance methods"
        ],
        answer: 2
      },
      {
        id: 30,
        type: "mcq",
        question: "Method Overriding is also known as:",
        options: [
          "Static Polymorphism.",
          "Run-Time Polymorphism.",
          "Compile-Time Polymorphism.",
          "Overloading Polymorphism."
        ],
        answer: 1
      },
      {
        id: 31,
        type: "mcq",
        question: "The keywords this and super cannot be used in a static context because:",
        options: [
          "They relate to class-level members.",
          "Static methods are executed before the main method.",
          "They relate to the object, but static relates to the class.",
          "Static methods cannot have return types."
        ],
        answer: 2
      },
      {
        id: 32,
        type: "mcq",
        question: "What is the purpose of a Java Static Block?",
        options: [
          "To initialize instance data members.",
          "To execute code when an instance is created.",
          "To initialize the static data member.",
          "To define the main method."
        ],
        answer: 2
      },
      {
        id: 33,
        type: "mcq",
        question: "When is the Static Block executed?",
        options: [
          "Each time an instance is created.",
          "Before the main method at the time of class loading.",
          "After the parent class constructor is invoked.",
          "Only when explicitly called."
        ],
        answer: 1
      },
      {
        id: 34,
        type: "mcq",
        question: "The Instance Initialization Block (IIB) runs each time when:",
        options: [
          "The class is loaded.",
          "An instance of the class is created.",
          "A static method is called.",
          "The main method finishes execution."
        ],
        answer: 1
      },
      {
        id: 35,
        type: "mcq",
        question: "The use of the Instance Initialization Block (IIB) is to initialize:",
        options: [
          "Static data members.",
          "Global variables.",
          "Class-level fields.",
          "Instance data members."
        ],
        answer: 3
      },
      {
        id: 36,
        type: "mcq",
        question: "What core benefit does Polymorphism provide in terms of development efficiency?",
        options: [
          "It forces the use of static methods.",
          "It provides code reusability and saves time for the coder.",
          "It guarantees a compile-time resolution for method calls.",
          "It requires all methods to have the same signature."
        ],
        answer: 1
      },
      {
        id: 37,
        type: "mcq",
        question: "What is the main goal of Abstraction in programming?",
        options: [
          "To protect data by using private fields.",
          "To allow a class to inherit features from another class.",
          "To handle complexity by hiding unnecessary details from the user.",
          "To enable the same action to be performed in many different ways."
        ],
        answer: 2
      },
      {
        id: 38,
        type: "mcq",
        question: "When should a programmer consider using Abstraction in their code?",
        options: [
          "When they want to directly access all private fields.",
          "When they want to provide implementation to all methods in a class.",
          "When they cannot provide implementation to all methods in a class and need to leave it to subclasses.",
          "When all classes must be static."
        ],
        answer: 2
      },
      {
        id: 39,
        type: "mcq",
        question: "Which OOP principle is described as protecting player data with private fields?",
        options: [
          "Abstraction",
          "Inheritance",
          "Polymorphism",
          "Encapsulation"
        ],
        answer: 3
      },
      {
        id: 40,
        type: "mcq",
        question: "Which OOP principle simplifies interactions using interfaces for weapons?",
        options: [
          "Encapsulation",
          "Inheritance",
          "Polymorphism",
          "Abstraction"
        ],
        answer: 3
      },
      {
        id: 41,
        type: "mcq",
        question: "Which OOP principle allows specialized weapon types to share functionality?",
        options: [
          "Abstraction",
          "Inheritance",
          "Encapsulation",
          "Polymorphism"
        ],
        answer: 1
      },
      {
        id: 42,
        type: "mcq",
        question: "Which OOP principle enables different behaviors for firing weapons (e.g., a rifle fires differently than a pistol)?",
        options: [
          "Encapsulation",
          "Abstraction",
          "Inheritance",
          "Polymorphism"
        ],
        answer: 3
      },
      {
        id: 43,
        type: "mcq",
        question: "When a class extends an abstract class, it is typically required to provide implementation for the abstract methods, fulfilling the intention of:",
        options: [
          "Data protection.",
          "Code reusability.",
          "Leaving the implementation to a subclass.",
          "Runtime overloading."
        ],
        answer: 2
      },
      {
        id: 44,
        type: "mcq",
        question: "If a class contains at least one abstract method, the class itself must be declared as:",
        options: [
          "final",
          "private",
          "abstract",
          "static"
        ],
        answer: 2
      },
      {
        id: 45,
        type: "mcq",
        question: "The Single Responsibility Principle (SRP) states that a class should have:",
        options: [
          "Many responsibilities to maximize reusability.",
          "Only one responsibility and only one reason to change.",
          "A responsibility that is inherited from its parent.",
          "Responsibilities that are handled by a static block."
        ],
        answer: 1
      },
      {
        id: 46,
        type: "mcq",
        question: "Which of the following is a benefit of adhering to the Single Responsibility Principle?",
        options: [
          "Higher coupling",
          "Difficult testing",
          "Lower coupling",
          "Unorganized code"
        ],
        answer: 2
      },
      {
        id: 47,
        type: "mcq",
        question: "A class violating SRP often needs:",
        options: [
          "Frequent modification for unrelated reasons",
          "No change at all",
          "Multiple inheritance",
          "More constructors"
        ],
        answer: 0
      },
      {
        id: 48,
        type: "mcq",
        question: "Which principle designing classes that are open for extension but closed for modification?",
        options: [
          "Single Responsibility Principle",
          "Open-Closed Principle",
          "Liskov Substitution Principle",
          "Interface Segregation Principle"
        ],
        answer: 1
      },
      {
        id: 49,
        type: "mcq",
        question: "What does the Liskov Substitution Principle state?",
        options: [
          "Subtypes should be substitutable for their base types without altering program correctness",
          "Classes should have only one reason to change",
          "Interfaces should be small and focused",
          "High-level modules should not depend on low-level modules"
        ],
        answer: 0
      },
      {
        id: 50,
        type: "mcq",
        question: "Which principle promotes splitting large interfaces into smaller, more specific ones?",
        options: [
          "Single Responsibility Principle",
          "Open-Closed Principle",
          "Liskov Substitution Principle",
          "Interface Segregation Principle"
        ],
        answer: 3
      },
      {
        id: 51,
        type: "mcq",
        question: "What is the main idea behind the Dependency Inversion Principle?",
        options: [
          "Classes should have only one responsibility",
          "Code should be open for extension but closed for modification",
          "High-level modules should not depend on low-level modules. Both should depend on abstractions",
          "Interfaces should be small and focused"
        ],
        answer: 2
      },
      {
        id: 52,
        type: "mcq",
        question: "What does the acronym SOLID stand for in software engineering principles?",
        options: [
          "Secure, Object-Oriented, Linked, Independent, Distributed",
          "Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion",
          "Scalable, Optimized, Layered, Iterative, Deployable",
          "Standardized, Object-Oriented, Loosely Coupled, Intuitive, Documented"
        ],
        answer: 1
      },
      {
        id: 53,
        type: "mcq",
        question: "Which SOLID principle aims to reduce the impact of changes by ensuring that modifications to one module do not affect others?",
        options: [
          "Single Responsibility Principle",
          "Open/Closed Principle",
          "Liskov Substitution Principle",
          "Dependency Inversion Principle"
        ],
        answer: 1
      },
      {
        id: 54,
        type: "mcq",
        question: "What issue does the Interface Segregation Principle address?",
        options: [
          "Classes having too many responsibilities",
          "Subclasses not adhering to the behavior of their base classes",
          "Clients being forced to depend on methods they don't use",
          "High-level modules depending directly on low-level modules"
        ],
        answer: 2
      },
      {
        id: 55,
        type: "mcq",
        question: "The Liskov Substitution Principle states that:",
        options: [
          "Interfaces should be small and focused",
          "Subtypes should be substitutable for their base types without altering program correctness",
          "Classes should have only one reason to change",
          "High-level modules should not depend on low-level modules"
        ],
        answer: 1
      },
      {
        id: 56,
        type: "mcq",
        question: "Which SOLID principle advocates separating interfaces into smaller, more specific ones?",
        options: [
          "Single Responsibility Principle",
          "Open/Closed Principle",
          "Liskov Substitution Principle",
          "Interface Segregation Principle"
        ],
        answer: 3
      },
      {
        id: 57,
        type: "mcq",
        question: "What does the acronym \"SOLID\" represent in the context of software design principles?",
        options: [
          "A set of five design principles aimed at making software more understandable, flexible, and maintainable",
          "A specific design pattern for creating complex objects",
          "A type of programming language used for enterprise applications",
          "A methodology for managing software development projects"
        ],
        answer: 0
      },
      {
        id: 58,
        type: "mcq",
        question: "According to the Dependency Inversion Principle, what should high-level modules depend on?",
        options: [
          "Low-level modules directly",
          "Abstractions, not concretions",
          "Concrete implementations of other modules",
          "The database layer"
        ],
        answer: 1
      },
      {
        id: 59,
        type: "mcq",
        question: "Which of the following is an example of violating the Liskov Substitution Principle?",
        options: [
          "Using inheritance to extend a class",
          "Creating an abstract class that is not implemented by any subclass",
          "Subclass modifying the behavior of a method such that it cannot be used in place of its parent class",
          "Implementing an interface with an abstract class"
        ],
        answer: 2
      },
      {
        id: 60,
        type: "mcq",
        question: "Which SOLID principle is primarily aimed at reducing the size of large interfaces?",
        options: [
          "Single Responsibility Principle",
          "Interface Segregation Principle",
          "Liskov Substitution Principle",
          "Dependency Inversion Principle"
        ],
        answer: 1
      },
      {
        id: 61,
        type: "mcq",
        question: "Which of the following is an example of violating the Open/Closed Principle?",
        options: [
          "Using inheritance to extend a class's functionality",
          "Modifying existing classes to add new features",
          "Implementing an interface to add new behaviors",
          "Using abstract classes for common functionality"
        ],
        answer: 1
      },
      {
        id: 62,
        type: "mcq",
        question: "Which type of design pattern deals with the creation of objects?",
        options: [
          "Creational Design Patterns",
          "Structural Design Patterns",
          "Behavioral Design Patterns",
          "None of the above"
        ],
        answer: 0
      },
      {
        id: 63,
        type: "mcq",
        question: "Which type of design pattern focuses on the communication and interaction between objects?",
        options: [
          "Creational Design Pattern",
          "Structural Design Pattern",
          "Behavioral Design Pattern",
          "Concurrency Design Pattern"
        ],
        answer: 2
      },
      {
        id: 64,
        type: "mcq",
        question: "Which of the following is NOT a benefit of using design patterns?",
        options: [
          "Reusability",
          "Maintainability",
          "Increased code complexity",
          "Improved code understanding"
        ],
        answer: 2
      },
      {
        id: 65,
        type: "mcq",
        question: "What are the three main categories of design patterns?",
        options: [
          "Simple, Complex, and Advanced",
          "Abstract, Concrete, and Interface",
          "Creational, Structural, and Behavioral",
          "Static, Dynamic, and Runtime"
        ],
        answer: 2
      },
      {
        id: 66,
        type: "mcq",
        question: "How can design patterns be helpful in software development?",
        options: [
          "They eliminate the need for testing",
          "They guarantee bug-free code",
          "They provide proven solutions to recurring design problems, enhancing code readability and maintainability",
          "They automate the entire coding process"
        ],
        answer: 2
      },
      {
        id: 67,
        type: "mcq",
        question: "Which of the following is NOT a type of design pattern category?",
        options: [
          "Creational",
          "Structural",
          "Behavioral",
          "Abstract"
        ],
        answer: 3
      },
      {
        id: 68,
        type: "mcq",
        question: "Which of these patterns falls under the category of behavioral design patterns?",
        options: [
          "Adapter",
          "Proxy",
          "Facade",
          "Observer"
        ],
        answer: 3
      },
      {
        id: 69,
        type: "mcq",
        question: "Which of the following best describes the Singleton design pattern?",
        options: [
          "A pattern that restricts the instantiation of a class to a single instance and provides global access to that instance",
          "A pattern that ensures multiple instances of a class can be created",
          "A pattern that allows objects with incompatible interfaces to collaborate",
          "A pattern that defines a family of related objects"
        ],
        answer: 0
      },
      {
        id: 70,
        type: "mcq",
        question: "What problem does the Singleton pattern solve?",
        options: [
          "The need to create objects with many optional fields",
          "The need to ensure only one instance of a class exists in the system",
          "The need to separate the creation of an object from its representation",
          "The need to provide a common interface for different classes"
        ],
        answer: 1
      },
      {
        id: 71,
        type: "mcq",
        question: "Which of the following is a key characteristic of the Singleton pattern?",
        options: [
          "It allows multiple instances of a class to be created",
          "It provides a way to dynamically add behaviors to an object",
          "It ensures that a class has only one instance and provides a global point of access to that instance",
          "It allows objects to be created without specifying their exact class"
        ],
        answer: 2
      },
      {
        id: 72,
        type: "mcq",
        question: "What is the main difference between Eager and Lazy initialization in the Singleton pattern?",
        options: [
          "Eager initialization creates the instance at application startup, while Lazy initialization creates it on demand",
          "Lazy initialization creates the instance at application startup, while Eager initialization creates it on demand",
          "Eager initialization allows multiple instances, while Lazy initialization ensures only one instance",
          "Lazy initialization is more memory efficient than Eager initialization"
        ],
        answer: 0
      },
      {
        id: 73,
        type: "mcq",
        question: "Which method is commonly used to access the instance of a Singleton class?",
        options: [
          "newInstance()",
          "getObject()",
          "getInstance()",
          "createObject()"
        ],
        answer: 2
      },
      {
        id: 74,
        type: "mcq",
        question: "What potential issue can arise when using a Singleton pattern in a multithreaded environment?",
        options: [
          "The instance may be created multiple times if proper synchronization is not applied",
          "The Singleton class cannot be inherited",
          "The Singleton instance may be garbage collected",
          "The Singleton pattern violates the Open/Closed Principle"
        ],
        answer: 0
      },
      {
        id: 75,
        type: "mcq",
        question: "Which of the following statements about the Singleton pattern is correct?",
        options: [
          "The Singleton pattern guarantees that a class will have only one instance, but it does not guarantee global access to that instance",
          "The Singleton pattern is a type of structural design pattern",
          "The Singleton pattern can be used to manage shared resources like database connections and configuration settings",
          "The Singleton pattern is only applicable in object-oriented programming languages"
        ],
        answer: 2
      },
      {
        id: 76,
        type: "mcq",
        question: "Which of the following is a disadvantage of the Singleton pattern?",
        options: [
          "It reduces the flexibility of code by preventing subclassing",
          "It allows multiple instances of a class to be created",
          "It makes the code more difficult to understand and maintain",
          "It cannot be used in multithreaded environments"
        ],
        answer: 0
      },
      {
        id: 77,
        type: "mcq",
        question: "What type of design pattern is the Singleton pattern?",
        options: [
          "Structural Design Pattern",
          "Creational Design Pattern",
          "Behavioral Design Pattern",
          "Architectural Design Pattern"
        ],
        answer: 1
      },
      {
        id: 78,
        type: "mcq",
        question: "What is a potential disadvantage of the Eager Singleton pattern?",
        options: [
          "It can be more complex to implement than Lazy Singleton",
          "It can be resource-intensive if the Singleton is not always needed",
          "It does not allow for lazy initialization",
          "It is not thread-safe"
        ],
        answer: 1
      },
      {
        id: 79,
        type: "mcq",
        question: "What is one of the potential drawbacks of the Lazy Singleton pattern in a multithreaded environment?",
        options: [
          "It can lead to resource wastage",
          "It requires synchronization mechanisms to ensure thread safety",
          "It creates the instance eagerly at startup",
          "It violates the Single Responsibility Principle"
        ],
        answer: 1
      },
      {
        id: 80,
        type: "mcq",
        question: "What is a potential benefit of using an Eager Singleton pattern?",
        options: [
          "Lazy initialization",
          "Reduced resource consumption",
          "Inherent thread safety",
          "Dynamic instantiation"
        ],
        answer: 2
      },
      {
        id: 81,
        type: "mcq",
        question: "Which of the following could lead to a potential problem in the Singleton Design Pattern if not handled correctly?",
        options: [
          "Sharing the Singleton across multiple threads",
          "Making the constructor public",
          "Using the Singleton with multiple classes",
          "Cloning the Singleton object"
        ],
        answer: 1
      },
      {
        id: 82,
        type: "mcq",
        question: "Which of the following best describes the Factory design pattern?",
        options: [
          "A pattern that provides a way to create objects without specifying their exact class",
          "A pattern that ensures only one instance of a class is created",
          "A pattern that dynamically adds new behavior to an object",
          "A pattern that defines a one-to-many relationship between objects"
        ],
        answer: 0
      },
      {
        id: 83,
        type: "mcq",
        question: "What problem does the Factory pattern solve?",
        options: [
          "Managing global state across an application",
          "Creating objects without exposing the instantiation logic to the client",
          "Ensuring that a class has only one instance",
          "Managing the composition of objects to form larger structures"
        ],
        answer: 1
      },
      {
        id: 84,
        type: "mcq",
        question: "How does the Factory pattern solve the problem of creating objects?",
        options: [
          "By using a constructor to create objects",
          "By providing a static method that returns an instance of a specific class",
          "By using reflection to instantiate objects",
          "By allowing direct access to the class's fields"
        ],
        answer: 1
      },
      {
        id: 85,
        type: "mcq",
        question: "Which of the following is a key characteristic of the Factory pattern?",
        options: [
          "It ensures that a class can have only one instance",
          "It hides the creation logic from the client and provides a common interface for object creation",
          "It adds new behaviors to objects dynamically",
          "It allows multiple classes to be instantiated at runtime"
        ],
        answer: 1
      },
      {
        id: 86,
        type: "mcq",
        question: "Which of the following is an example of when to use the Factory pattern?",
        options: [
          "When you need to manage a single instance of a class",
          "When you need to create objects that are determined at runtime",
          "When you need to dynamically change an object's behavior",
          "When you need to manage complex relationships between classes"
        ],
        answer: 1
      },
      {
        id: 87,
        type: "mcq",
        question: "What is the main benefit of using the Factory pattern?",
        options: [
          "It ensures code is more efficient",
          "It simplifies object creation and promotes loose coupling",
          "It eliminates the need for classes altogether",
          "It enforces strict type-checking"
        ],
        answer: 1
      },
      {
        id: 88,
        type: "mcq",
        question: "Which of the following is NOT a step in implementing the Factory pattern?",
        options: [
          "Define a common interface for the objects being created",
          "Create concrete classes that implement the interface",
          "Provide a factory method to create objects",
          "Use a public constructor to create objects directly"
        ],
        answer: 3
      },
      {
        id: 89,
        type: "mcq",
        question: "When would the Factory pattern be an inappropriate choice?",
        options: [
          "When you need to manage a single instance of a resource",
          "When object creation is simple and doesn't require additional logic",
          "When the application needs to create objects dynamically",
          "When different subclasses need to be instantiated based on user input"
        ],
        answer: 1
      },
      {
        id: 90,
        type: "mcq",
        question: "Which of the following scenarios is best suited for the Factory pattern?",
        options: [
          "Creating a singleton database connection",
          "Creating different types of shapes in a drawing application",
          "Adding new functionality to an existing object at runtime",
          "Managing access to a shared resource"
        ],
        answer: 1
      },
      {
        id: 91,
        type: "mcq",
        question: "What principle does the Factory pattern promote?",
        options: [
          "Dependency on concrete classes",
          "Tight coupling between components",
          "Encapsulation of object creation logic",
          "Multiple inheritance"
        ],
        answer: 2
      },
      {
        id: 92,
        type: "mcq",
        question: "Which design principle is closely related to the Factory pattern?",
        options: [
          "Open/Closed Principle",
          "Single Responsibility Principle",
          "Liskov Substitution Principle",
          "Interface Segregation Principle"
        ],
        answer: 0
      },
      {
        id: 93,
        type: "mcq",
        question: "Which design pattern is used to create families of related objects without specifying their concrete classes?",
        options: [
          "Singleton Pattern",
          "Factory Pattern",
          "Prototype Pattern",
          "Builder Pattern"
        ],
        answer: 1
      },
      {
        id: 94,
        type: "mcq",
        question: "Which design pattern is suitable for creating weapon objects in a game like PUBG, allowing easy addition of new weapon types?",
        options: [
          "Builder Pattern",
          "Prototype Pattern",
          "Factory Pattern",
          "Singleton Pattern"
        ],
        answer: 2
      },
      {
        id: 95,
        type: "mcq",
        question: "What does the Factory pattern provide over directly instantiating objects using the new keyword?",
        options: [
          "Reduces the number of classes",
          "Improves code readability",
          "Encapsulates object creation and increases flexibility",
          "Reduces memory usage"
        ],
        answer: 2
      },
      {
        id: 96,
        type: "mcq",
        question: "Which of the following scenarios is best suited for the Factory pattern?",
        options: [
          "When a class needs to ensure a single instance",
          "When a class needs to be extended",
          "When you have a superclass with multiple subclasses, and you need to return an object based on input",
          "When you want to copy objects"
        ],
        answer: 2
      },
      {
        id: 97,
        type: "mcq",
        question: "What is the core idea behind the Factory design pattern?",
        options: [
          "To define a template for creating objects",
          "To centralize the creation of objects, providing an interface that isolates clients from concrete classes",
          "To ensure that only one instance of a class exists",
          "To add responsibilities to objects dynamically"
        ],
        answer: 1
      },
      {
        id: 98,
        type: "mcq",
        question: "Which of the following scenarios is best suited for the Factory pattern?",
        options: [
          "When a class needs to ensure a single instance.",
          "When a class needs to be extended.",
          "When you have a superclass with multiple subclasses, and you need to return an object based on input.",
          "When you want to copy objects."
        ],
        answer: 2
      },
      {
        id: 99,
        type: "mcq",
        question: "Which of the following scenarios is best suited for the Factory pattern?",
        options: [
          "When a class needs to ensure a single instance.",
          "When a class needs to be extended.",
          "When you have a superclass with multiple subclasses, and you need to return an object based on input.",
          "When you want to copy objects."
        ],
        answer: 2
      },
      {
        id: 100,
        type: "mcq",
        question: "Which of the following scenarios is best suited for the Factory pattern?",
        options: [
          "When a class needs to ensure a single instance.",
          "When a class needs to be extended.",
          "When you have a superclass with multiple subclasses, and you need to return an object based on input.",
          "When you want to copy objects."
        ],
        answer: 2
      },
      {
        id: 101,
        type: "truefalse",
        question: "A Class specifies the fields and methods a particular type of objects has.",
        options: ["True", "False"],
        answer: 0
      },
      {
        id: 102,
        type: "truefalse",
        question: "Method Overloading requires methods to have the same name but the same parameter list.",
        options: ["True", "False"],
        answer: 1
      },
      {
        id: 103,
        type: "truefalse",
        question: "Inheritance allows a new class to inherit the members (fields and methods) of an existing class it extends.",
        options: ["True", "False"],
        answer: 0
      },
      {
        id: 104,
        type: "truefalse",
        question: "Method Overriding occurs when a subclass provides an implementation of a method already existing in one of its superclasses.",
        options: ["True", "False"],
        answer: 0
      },
      {
        id: 105,
        type: "truefalse",
        question: "Polymorphism means that a subclass reference variable can only reference objects of its own class.",
        options: ["True", "False"],
        answer: 1
      },
      {
        id: 106,
        type: "truefalse",
        question: "Interfaces provide a full implementation of the behavior they specify for a class.",
        options: ["True", "False"],
        answer: 1
      },
      {
        id: 107,
        type: "truefalse",
        question: "Standard Library Methods are methods that a developer defines specifically for their program's unique needs.",
        options: ["True", "False"],
        answer: 1
      },
      {
        id: 108,
        type: "truefalse",
        question: "Constructors can be used to set initial values for an object's attributes.",
        options: ["True", "False"],
        answer: 0
      },
      {
        id: 109,
        type: "truefalse",
        question: "Code reusability means the code written in the Superclass is only accessible to the Superclass itself.",
        options: ["True", "False"],
        answer: 1
      },
      {
        id: 110,
        type: "truefalse",
        question: "Inheritance represents a HAS-A relationship.",
        options: ["True", "False"],
        answer: 1
      },
      {
        id: 111,
        type: "truefalse",
        question: "The private members of a superclass are not accessible in the subclass directly.",
        options: ["True", "False"],
        answer: 0
      },
      {
        id: 112,
        type: "truefalse",
        question: "Polymorphism makes it possible to provide different implementations of a method to perform different functionalities.",
        options: ["True", "False"],
        answer: 0
      },
      {
        id: 113,
        type: "truefalse",
        question: "A static method can directly call a non-static method.",
        options: ["True", "False"],
        answer: 1
      },
      {
        id: 114,
        type: "truefalse",
        question: "The Static Block is executed after the main method finishes.",
        options: ["True", "False"],
        answer: 1
      },
      {
        id: 115,
        type: "truefalse",
        question: "The Instance Initializer Block (IIB) is invoked before the parent class constructor is invoked.",
        options: ["True", "False"],
        answer: 1
      },
      {
        id: 116,
        type: "truefalse",
        question: "The Open/Closed Principle states that software entities should be open for extension but closed for modification.",
        options: ["True", "False"],
        answer: 0
      },
      {
        id: 117,
        type: "truefalse",
        question: "The Single Responsibility Principle promotes having multiple reasons for a class to change.",
        options: ["True", "False"],
        answer: 1
      },
      {
        id: 118,
        type: "truefalse",
        question: "The Liskov Substitution Principle ensures that subtypes can replace their base types without altering program correctness.",
        options: ["True", "False"],
        answer: 0
      },
      {
        id: 119,
        type: "truefalse",
        question: "The Interface Segregation Principle encourages large, monolithic interfaces.",
        options: ["True", "False"],
        answer: 1
      },
      {
        id: 120,
        type: "truefalse",
        question: "The Dependency Inversion Principle aims to reduce coupling between high-level and low-level modules.",
        options: ["True", "False"],
        answer: 0
      },
      {
        id: 121,
        type: "truefalse",
        question: "The SOLID principles can be applied to any object-oriented programming language.",
        options: ["True", "False"],
        answer: 0
      },
      {
        id: 122,
        type: "truefalse",
        question: "The Open/Closed Principle promotes code reusability and maintainability.",
        options: ["True", "False"],
        answer: 0
      },
      {
        id: 123,
        type: "truefalse",
        question: "Using a public constructor, the Singleton pattern ensures a class has only one instance.",
        options: ["True", "False"],
        answer: 1
      },
      {
        id: 124,
        type: "truefalse",
        question: "The Factory pattern is a behavioral design pattern.",
        options: ["True", "False"],
        answer: 1
      }
    ];

    // DOM elements
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('options');
    const nextBtn = document.getElementById('nextBtn');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const quizSection = document.getElementById('quiz');
    const resultsSection = document.getElementById('results');
    const scoreDisplay = document.getElementById('score');
    const feedbackDisplay = document.getElementById('feedbackText');
    const restartBtn = document.getElementById('restartBtn');
    const feedbackElement = document.getElementById('feedback');

    let currentQuestionIndex = 0;
    let score = 0;
    let selectedOption = null;
    let answerSubmitted = false;

    // Start the quiz
    function initQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      answerSubmitted = false;
      showQuestion();
    }

    // Display current question
    function showQuestion() {
      const q = questions[currentQuestionIndex];
      questionText.textContent = `${currentQuestionIndex + 1}. ${q.question}`;
      optionsContainer.innerHTML = '';
      
      q.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = String.fromCharCode(97 + index) + '. ' + option;
        button.onclick = () => selectOption(button, index);
        optionsContainer.appendChild(button);
      });

      nextBtn.disabled = true;
      nextBtn.textContent = currentQuestionIndex === questions.length - 1 ? 'Submit Quiz' : 'Next Question';
      feedbackElement.classList.add('hidden');
      answerSubmitted = false;
      updateProgress();
    }

    // Handle option selection
    function selectOption(button, index) {
      if (answerSubmitted) return;
      
      // Remove previous selections
      document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
      });
      
      button.classList.add('selected');
      selectedOption = index;
      nextBtn.disabled = false;
      
      // Show immediate feedback
      showImmediateFeedback(index);
    }

    // Show immediate feedback when an option is selected
    function showImmediateFeedback(selectedIndex) {
      const q = questions[currentQuestionIndex];
      const options = document.querySelectorAll('.option');
      
      options.forEach((opt, i) => {
        if (i === q.answer) {
          opt.classList.add('correct');
        } else if (i === selectedIndex && i !== q.answer) {
          opt.classList.add('incorrect');
        }
      });
      
      // Show feedback message
      feedbackElement.classList.remove('hidden');
      if (selectedIndex === q.answer) {
        feedbackElement.textContent = "Correct!";
        feedbackElement.classList.remove('incorrect');
        feedbackElement.classList.add('correct');
      } else {
        feedbackElement.textContent = "Incorrect!";
        feedbackElement.classList.remove('correct');
        feedbackElement.classList.add('incorrect');
      }
      
      answerSubmitted = true;
      
      // Update score
      if (selectedIndex === q.answer) {
        score++;
      }
      
      // Disable further interaction with options
      options.forEach(opt => {
        opt.onclick = null;
        opt.style.cursor = 'default';
      });
    }

    // Move to next question or submit
    function nextQuestion() {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showResults();
      }
    }

    // Update progress bar & text
    function updateProgress() {
      const percent = ((currentQuestionIndex) / questions.length) * 100;
      progressBar.style.width = `${percent}%`;
      progressText.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    }

    // Show final results
    function showResults() {
      quizSection.classList.add('hidden');
      resultsSection.classList.remove('hidden');

      const percentage = Math.round((score / questions.length) * 100);
      scoreDisplay.textContent = `You scored ${score} out of ${questions.length} (${percentage}%)`;

      let feedback = "";
      if (percentage >= 90) feedback = "🏆 Excellent! You're a SOLID OOP master!";
      else if (percentage >= 75) feedback = "🎉 Great job! Solid understanding of OOP principles.";
      else if (percentage >= 60) feedback = "👍 Good effort! Review a few concepts to level up.";
      else feedback = "📚 Keep learning — OOP fundamentals take practice!";

      feedbackDisplay.textContent = feedback;
    }

    // Event listeners
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', () => {
      resultsSection.classList.add('hidden');
      quizSection.classList.remove('hidden');
      initQuiz();
    });

    // Start quiz on load
    window.addEventListener('DOMContentLoaded', initQuiz);
