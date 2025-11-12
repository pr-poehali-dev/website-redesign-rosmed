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
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">
              НОЦ СМТ
            </Link>
            <div className="flex gap-6">
              <Link to="/" className="text-primary font-semibold">
                Направления
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                О центре
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              📚 Направления обучения
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Лицензированные программы для психологов и специалистов помогающих профессий
            </p>
            <Button size="lg" className="text-lg px-8 shadow-lg">
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {courseBlocks.map((block, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex gap-4 mb-4">
                <div className={`w-14 h-14 ${block.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <Icon name={block.icon} className={block.iconColor} size={28} />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-foreground leading-tight">
                    {block.title}
                  </h2>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {block.description}
              </p>
              <div className="mb-4 space-y-2">
                {block.courses.map((course, courseIndex) => (
                  <a 
                    key={courseIndex} 
                    href="#" 
                    className="block bg-gradient-to-r from-muted/30 to-muted/10 hover:from-primary/10 hover:to-primary/5 p-3 rounded-lg transition-all hover:shadow-md border border-transparent hover:border-primary/20"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground leading-snug">
                          {typeof course === 'string' ? course : course.name}
                        </p>
                      </div>
                      <span className={`text-xs font-bold whitespace-nowrap flex-shrink-0 ${
                        typeof course === 'object' && course.isFree 
                          ? 'text-green-600 bg-green-100 px-3 py-1 rounded-full' 
                          : 'text-primary bg-primary/10 px-3 py-1 rounded-full'
                      }`}>
                        {typeof course === 'string' ? '' : course.price}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground border-t pt-3">
                <div className="flex items-center gap-1">
                  <Icon name="MonitorPlay" size={14} />
                  <span>Онлайн</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Award" size={14} />
                  <span>Сертификат</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 bg-white/80 backdrop-blur border-2 border-primary/20 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="FileCheck" className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2 text-foreground">✅ Лицензия и надёжность</h2>
                  <p className="text-sm text-foreground mb-3">
                    Все программы реализуются по лицензии на образовательную деятельность. Выдаём удостоверения государственного образца.
                  </p>
                  <Button variant="link" className="text-primary p-0 h-auto font-semibold text-sm">
                    Посмотреть лицензию →
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">💬 Нужна помощь в выборе?</h2>
            <p className="text-base text-muted-foreground mb-6">
              Методист центра поможет подобрать программу под ваш опыт и цели
            </p>
            <Button size="lg" className="text-lg px-8 shadow-lg">
              Получить консультацию →
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">❓ Частые вопросы</h2>
            <div className="space-y-4">
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
                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
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

      <footer className="border-t py-8 bg-muted/20">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 НОЦ СМТ. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;