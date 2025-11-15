import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Settings" size={32} className="text-accent" />
              <h1 className="text-2xl font-heading font-bold text-primary">ЭГА Сервис</h1>
            </div>
            <nav className="hidden md:flex gap-8">
              {[
                { id: "home", label: "Главная" },
                { id: "services", label: "Услуги" },
                { id: "about", label: "О нас" },
                { id: "prices", label: "Цены" },
                { id: "warranty", label: "Гарантии" },
                { id: "contacts", label: "Контакты" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === item.id ? "text-accent" : "text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <Button className="hidden md:flex" onClick={() => scrollToSection("contacts")}>
              Связаться
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
                Профессиональный ремонт рулевых реек
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Специализируемся на ремонте гидравлических, электрических и механических рулевых реек легковых автомобилей. Гарантия качества и надежности.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90" onClick={() => scrollToSection("contacts")}>
                  Записаться на ремонт
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("services")}>
                  Наши услуги
                </Button>
              </div>
              <div className="flex gap-8 mt-12">
                <div>
                  <div className="text-3xl font-heading font-bold text-accent">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-accent">5000+</div>
                  <div className="text-sm text-muted-foreground">отремонтировано</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-accent">98%</div>
                  <div className="text-sm text-muted-foreground">довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in">
              <img
                src="https://cdn.poehali.dev/projects/8b9699d8-b55e-4234-852e-14006d9151c1/files/d69211e8-f31d-48ba-8012-115574eb8651.jpg"
                alt="Автосервис ЭГА Сервис"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по диагностике и ремонту рулевых реек всех типов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Droplets",
                title: "Гидравлические рейки",
                description: "Ремонт и восстановление гидравлических рулевых реек. Замена сальников, уплотнителей, устранение течей гидравлической жидкости.",
                features: ["Замена сальников", "Устранение течей", "Проверка ГУР", "Балансировка системы"]
              },
              {
                icon: "Zap",
                title: "Электрические рейки",
                description: "Диагностика и ремонт электрических рулевых реек (EUR). Замена электромоторов, датчиков, блоков управления.",
                features: ["Диагностика ЭУР", "Замена моторов", "Ремонт блоков", "Калибровка датчиков"]
              },
              {
                icon: "Cog",
                title: "Механические рейки",
                description: "Ремонт механических рулевых реек. Замена втулок, наконечников, регулировка зазоров и люфтов.",
                features: ["Замена втулок", "Регулировка зазоров", "Устранение люфтов", "Проверка механики"]
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/8b9699d8-b55e-4234-852e-14006d9151c1/files/02c3dd4c-1e3a-46df-929a-61d556997146.jpg"
                alt="О нас"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                О нашем сервисе
              </h2>
              <p className="text-muted-foreground mb-6">
                ЭГА Сервис — специализированный автосервис с 15-летним опытом работы в сфере ремонта рулевых реек. Наши мастера прошли обучение у ведущих производителей и готовы решить любую проблему с вашей рулевой системой.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                {[
                  { icon: "Award", title: "Сертифицированные мастера", desc: "Все специалисты имеют сертификаты" },
                  { icon: "Wrench", title: "Современное оборудование", desc: "Профессиональный инструмент" },
                  { icon: "Clock", title: "Быстрый ремонт", desc: "От 1 до 3 дней" },
                  { icon: "ShieldCheck", title: "Гарантия качества", desc: "До 2 лет на работы" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0">
                      <Icon name={item.icon} size={24} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Цены на услуги
            </h2>
            <p className="text-lg text-muted-foreground">
              Прозрачное ценообразование без скрытых платежей
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-primary-foreground">
                      <tr>
                        <th className="px-6 py-4 text-left font-heading">Услуга</th>
                        <th className="px-6 py-4 text-left font-heading">Срок</th>
                        <th className="px-6 py-4 text-right font-heading">Цена</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        { service: "Диагностика рулевой рейки", time: "30-60 мин", price: "Бесплатно" },
                        { service: "Ремонт гидравлической рейки", time: "1-2 дня", price: "от 8 000 ₽" },
                        { service: "Ремонт электрической рейки (ЭУР)", time: "2-3 дня", price: "от 12 000 ₽" },
                        { service: "Ремонт механической рейки", time: "1 день", price: "от 6 000 ₽" },
                        { service: "Замена сальников и уплотнителей", time: "4-6 часов", price: "от 4 000 ₽" },
                        { service: "Замена наконечников рулевых тяг", time: "2-3 часа", price: "от 2 500 ₽" },
                        { service: "Регулировка и настройка рейки", time: "1-2 часа", price: "от 1 500 ₽" }
                      ].map((item, index) => (
                        <tr key={index} className="hover:bg-secondary/50 transition-colors">
                          <td className="px-6 py-4">{item.service}</td>
                          <td className="px-6 py-4 text-muted-foreground">{item.time}</td>
                          <td className="px-6 py-4 text-right font-semibold text-accent">{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground text-center mt-6">
              * Точная стоимость определяется после диагностики
            </p>
          </div>
        </div>
      </section>

      <section id="warranty" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Гарантии качества
              </h2>
              <p className="text-lg text-muted-foreground">
                Мы уверены в качестве наших работ
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: "FileCheck",
                  title: "Гарантия на работы",
                  desc: "2 года гарантии на все виды ремонтных работ"
                },
                {
                  icon: "Package",
                  title: "Гарантия на запчасти",
                  desc: "1 год на все установленные запасные части"
                },
                {
                  icon: "RotateCcw",
                  title: "Бесплатная повторная диагностика",
                  desc: "Если проблема вернулась в течение гарантийного срока"
                },
                {
                  icon: "PhoneCall",
                  title: "Послегарантийное обслуживание",
                  desc: "Бесплатные консультации и техническая поддержка"
                },
                {
                  icon: "BadgeCheck",
                  title: "Оригинальные запчасти",
                  desc: "Используем только сертифицированные комплектующие"
                },
                {
                  icon: "FileText",
                  title: "Договор с клиентом",
                  desc: "Прозрачные условия сотрудничества в письменном виде"
                }
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Icon name={item.icon} size={24} className="text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Контакты
              </h2>
              <p className="text-lg text-muted-foreground">
                Свяжитесь с нами удобным способом
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-heading font-semibold mb-6">Наши контакты</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Icon name="MapPin" size={24} className="text-accent flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Адрес:</div>
                        <div className="text-muted-foreground">г. Красноярск, ул. Водопьянова, д. 1К</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Phone" size={24} className="text-accent flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Телефон:</div>
                        <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Mail" size={24} className="text-accent flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Email:</div>
                        <div className="text-muted-foreground">info@ega-service.ru</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Clock" size={24} className="text-accent flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Режим работы:</div>
                        <div className="text-muted-foreground">Пн-Пт: 9:00 - 20:00</div>
                        <div className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-heading font-semibold mb-6">Записаться на ремонт</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Ваше имя</label>
                      <Input placeholder="Иван Иванов" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <Input placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Марка и модель авто</label>
                      <Input placeholder="Toyota Camry" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Опишите проблему</label>
                      <Textarea placeholder="Стук в рулевой рейке при повороте налево..." rows={4} />
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/90">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Icon name="Settings" size={28} className="text-accent" />
              <span className="text-xl font-heading font-bold">ЭГА Сервис</span>
            </div>
            <div className="text-sm text-center md:text-left">
              © 2024 ЭГА Сервис. Все права защищены.
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Phone" size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="MapPin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;