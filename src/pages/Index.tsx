import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const courseBlocks = [
  {
    icon: 'Brain',
    color: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'Клиническая психология и психопатология',
    description: 'Программы формируют клиническое мышление, помогают различать границы между психологией и психиатрией, понимать структуру психических состояний и безопасно сопровождать клиентов.',
    courses: [
      { name: 'Психиатрическая пропедевтика', price: '15 000 ₽' },
      { name: 'Общая психопатология', price: '18 000 ₽' },
      { name: 'Клиническая суицидология: стратегии работы', price: '20 000 ₽' },
      { name: 'МРТ головного мозга: что должен знать психолог', price: '12 000 ₽' }
    ]
  },
  {
    icon: 'Scale',
    color: 'bg-purple-100',
    iconColor: 'text-purple-600',
    title: 'Судебно-психологическое и криминальное направление',
    description: 'Курсы для специалистов, работающих на стыке психологии и права. Помогают понимать закономерности девиантного поведения, механизмы виктимности и специфику судебно-психиатрических экспертиз.',
    courses: [
      { name: 'Психология агрессии и насилия: природа, проявления, профилактика', price: '22 000 ₽' },
      { name: 'Судебно-психиатрическая экспертиза в гражданском процессе', price: '25 000 ₽' },
      { name: 'Психология девиантного поведения', price: '16 000 ₽' },
      { name: 'Криминальная психология и виктимология', price: '19 000 ₽' }
    ]
  },
  {
    icon: 'Heart',
    color: 'bg-pink-100',
    iconColor: 'text-pink-600',
    title: 'Детская и подростковая психотерапия, сопровождение ОВЗ',
    description: 'Программы по сопровождению детей и подростков с особенностями эмоционального и когнитивного развития, включая работу с семьями и специалистами образовательных учреждений.',
    courses: [
      { name: 'Детская и подростковая психотерапия', price: '24 000 ₽' },
      { name: 'Современные подходы к коррекционно-развивающему процессу детей с ОВЗ', price: '17 000 ₽' },
      { name: 'Работа с детьми с ОВЗ: инструменты и принципы', price: '14 000 ₽' },
      { name: 'Нарушения речи: как говорить с детьми, у которых не получается говорить', price: '13 000 ₽' }
    ]
  },
  {
    icon: 'MessageCircle',
    color: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Психотерапевтические и консультативные подходы',
    description: 'Современные методы психологической помощи: от когнитивно-поведенческой терапии до глубинных направлений. Курсы подходят для практикующих специалистов, желающих расширить свои профессиональные инструменты.',
    courses: [
      { name: 'Когнитивно-поведенческая терапия', price: '28 000 ₽' },
      { name: 'Основы гештальт-психологии', price: '21 000 ₽' },
      { name: 'Основы психоанализа', price: '26 000 ₽' },
      { name: 'Основы экзистенциальной психологии', price: '20 000 ₽' },
      { name: 'Психотерапия нарушений пищевого поведения (по типу переедания)', price: '18 000 ₽' }
    ]
  },
  {
    icon: 'Palette',
    color: 'bg-orange-100',
    iconColor: 'text-orange-600',
    title: 'Арт-терапия и творческие методы',
    description: 'Интеграция искусства и психологии в терапевтическую практику. Обучение креативным методам помощи детям, подросткам и взрослым через рисунок, музыку, игру и сказку.',
    courses: [
      { name: 'Арт-терапия с детьми и подростками', price: '16 000 ₽' },
      { name: 'Арт-терапия и психическое здоровье', price: '15 000 ₽' },
      { name: 'Музыкальная терапия', price: '14 000 ₽' },
      { name: 'Куклотерапия', price: '11 000 ₽' },
      { name: 'Сказкотерапия', price: '10 000 ₽' },
      { name: 'Искусство аутсайдеров', price: '9 000 ₽' },
      { name: 'АртПоток. Все курсы', price: '45 000 ₽' }
    ]
  },
  {
    icon: 'Users',
    color: 'bg-teal-100',
    iconColor: 'text-teal-600',
    title: 'Социальная психология, волонтёрство и работа с сообществами',
    description: 'Курсы для специалистов, участвующих в социальных и благотворительных проектах. Фокус на психологической поддержке в НКО, медицинских организациях, профилактике агрессии и выгорания.',
    courses: [
      { name: 'Школа волонтёров в психиатрии', price: 'Бесплатно', isFree: true },
      { name: 'Социальный импакт', price: 'Бесплатно', isFree: true }
    ]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-5">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/ebc39e0f-7903-4e2b-a686-a7304d067697.png" 
                alt="МЕДОБРАЗ Лого" 
                className="h-12 w-auto"
              />
              <div className="max-w-xs">
                <div className="text-xs text-muted-foreground leading-tight">
                  Научно-образовательный центр современных медицинских технологий при поддержке Союза охраны психического здоровья
                </div>
              </div>
            </Link>
            <div className="flex gap-8 items-center">
              <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                О центре
              </Link>
              <Link to="/" className="text-sm font-medium text-primary">
                Направления обучения
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Направления обучения
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Лицензированные программы повышения квалификации для психологов и специалистов помогающих профессий.
              </p>
              <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span>Все программы проходят онлайн, включают лекции и практические модули.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span>По итогам обучения — удостоверение о повышении квалификации установленного государственного образца.</span>
                </div>
              </div>
            </div>
            <div className="w-96 flex-shrink-0">
              <Card className="p-6 bg-gray-50 border-gray-200 rounded-2xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Коротко</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white border border-gray-200 rounded-xl p-4">
                      <div className="text-xs text-muted-foreground mb-2">Формат</div>
                      <div className="text-sm font-semibold text-foreground">Онлайн</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4">
                      <div className="text-xs text-muted-foreground mb-2">Документ</div>
                      <div className="text-sm font-semibold text-foreground">Удостоверение ПК</div>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <div className="text-xs text-muted-foreground mb-2">Для кого</div>
                    <div className="text-sm font-semibold text-foreground">Психологи, смежные специалисты</div>
                    <p className="text-xs text-muted-foreground mt-2">
                      для психологов, психиатров, социальных работников и всех специалистов помогающих профессий
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <div className="text-xs text-muted-foreground mb-2">Поддержка</div>
                    <div className="text-sm font-semibold text-foreground">Методисты НОЦ СМТ</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 bg-background">
        <div className="max-w-5xl mx-auto">
          {courseBlocks.map((block, index) => (
            <div key={index} className="mb-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <h2 className="text-2xl font-bold text-primary flex-1">
                  {block.title}
                </h2>
                <div className="bg-gray-100 rounded-lg px-4 py-2">
                  <div className="text-xs text-muted-foreground mb-1">Формат</div>
                  <div className="text-sm font-semibold text-foreground">Онлайн</div>
                </div>
                <div className="bg-gray-100 rounded-lg px-4 py-2">
                  <div className="text-xs text-muted-foreground mb-1">Документ</div>
                  <div className="text-sm font-semibold text-foreground">Удостоверение ПК</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-4xl">
                {block.description}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {block.courses.map((course, courseIndex) => (
                  <a 
                    key={courseIndex} 
                    href="#" 
                    className="group block bg-white border border-gray-200 hover:border-primary/40 rounded-xl p-4 transition-all hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground leading-snug group-hover:text-primary transition-colors">
                          {typeof course === 'string' ? course : course.name}
                        </p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <Icon name="ExternalLink" size={12} />
                          <span>Открыть страницу курса</span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 bg-gray-50 border-gray-200 shadow-sm rounded-2xl">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="FileCheck" className="text-secondary" size={28} />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3 text-primary">Лицензия и надёжность</h2>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Все программы реализуются по лицензии на образовательную деятельность. Выдаём удостоверения государственного образца.
                  </p>
                  <Button variant="link" className="text-secondary p-0 h-auto font-semibold text-sm hover:text-secondary/80">
                    Посмотреть лицензию →
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary">Нужна помощь в выборе?</h2>
            <p className="text-base text-muted-foreground mb-8">
              Методист центра поможет подобрать программу под ваш опыт и цели
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-medium rounded-full px-8">
              Получить консультацию →
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-primary">Частые вопросы</h2>
            <div className="space-y-3">
              {[
                {
                  q: 'Как проходит обучение?',
                  a: 'Все программы проходят онлайн в формате видеолекций и практических занятий. Вы можете учиться в удобное время и получать обратную связь от преподавателей.'
                },
                {
                  q: 'Какой документ я получу после обучения?',
                  a: 'По окончании программы вы получаете удостоверение о повышении квалификации установленного государственного образца, признаваемое по всей России.'
                },
                {
                  q: 'Нужно ли базовое психологическое образование?',
                  a: 'Большинство программ рассчитаны на специалистов с профильным образованием (психологи, врачи, педагоги). Уточните требования к конкретному курсу у методиста.'
                },
                {
                  q: 'Можно ли оплатить курс частями?',
                  a: 'Да, мы предоставляем возможность рассрочки платежа. Обсудите удобный вариант оплаты при консультации с методистом центра.'
                },
                {
                  q: 'Сколько длится обучение?',
                  a: 'Продолжительность зависит от программы — от 72 до 250 академических часов. Конкретные сроки указаны в описании каждого курса.'
                },
                {
                  q: 'Есть ли бесплатные курсы?',
                  a: 'Да! Мы предлагаем бесплатные программы: "Школа волонтёров в психиатрии" и "Социальный импакт". Они доступны всем желающим.'
                }
              ].map((faq, index) => (
                <Card key={index} className="p-5 hover:shadow-sm transition-shadow bg-white border-gray-200">
                  <details className="group">
                    <summary className="font-semibold text-base text-foreground cursor-pointer list-none flex items-center justify-between">
                      <span>{faq.q}</span>
                      <Icon name="ChevronDown" size={20} className="text-muted-foreground group-open:rotate-180 transition-transform" />
                    </summary>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-6 bg-white">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 НОЦ СМТ. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;