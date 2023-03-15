const Controller = (target) => {
    target.isController = true;
};

@Controller
class MyClass {
}
console.log(MyClass.isController); // 输出结果：true
