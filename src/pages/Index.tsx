import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const courseBlocks = [
  {
    icon: 'Brain',
    title: 'Клиническая психология и психопатология',
    description: 'Программы формируют клиническое мышление, помогают различать границы между психологией и психиатрией, понимать структуру психических состояний и безопасно сопровождать клиентов.',
    courses: [
      'Психиатрическая пропедевтика',
      'Общая психопатология',
      'Клиническая суицидология: стратегии работы',
      'МРТ головного мозга: что должен знать психолог'
    ]
  },
  {
    icon: 'Scale',
    title: 'Судебно-психологическое и криминальное направление',
    description: 'Курсы для специалистов, работающих на стыке психологии и права. Помогают понимать закономерности девиантного поведения, механизмы виктимности и специфику судебно-психиатрических экспертиз.',
    courses: [
      'Психология агрессии и насилия: природа, проявления, профилактика',
      'Судебно-психиатрическая экспертиза в гражданском процессе',
      'Психология девиантного поведения',
      'Криминальная психология и виктимология'
    ]
  },
  {
    icon: 'Heart',
    title: 'Детская и подростковая психотерапия, сопровождение ОВЗ',
    description: 'Программы по сопровождению детей и подростков с особенностями эмоционального и когнитивного развития, включая работу с семьями и специалистами образовательных учреждений.',
    courses: [
      'Детская и подростковая психотерапия',
      'Современные подходы к коррекционно-развивающему процессу детей с ОВЗ',
      'Работа с детьми с ОВЗ: инструменты и принципы',
      'Нарушения речи: как говорить с детьми, у которых не получается говорить'
    ]
  },
  {
    icon: 'MessageCircle',
    title: 'Психотерапевтические и консультативные подходы',
    description: 'Современные методы психологической помощи: от когнитивно-поведенческой терапии до глубинных направлений. Курсы подходят для практикующих специалистов, желающих расширить свои профессиональные инструменты.',
    courses: [
      'Когнитивно-поведенческая терапия',
      'Основы гештальт-психологии',
      'Основы психоанализа',
      'Основы экзистенциальной психологии',
      'Психотерапия нарушений пищевого поведения (по типу переедания)'
    ]
  },
  {
    icon: 'Palette',
    title: 'Арт-терапия и творческие методы',
    description: 'Интеграция искусства и психологии в терапевтическую практику. Обучение креативным методам помощи детям, подросткам и взрослым через рисунок, музыку, игру и сказку.',
    courses: [
      'Арт-терапия с детьми и подростками',
      'Арт-терапия и психическое здоровье',
      'Музыкальная терапия',
      'Куклотерапия',
      'Сказкотерапия',
      'Искусство аутсайдеров',
      'АртПоток. Все курсы'
    ]
  },
  {
    icon: 'Users',
    title: 'Социальная психология, волонтёрство и работа с сообществами',
    description: 'Курсы для специалистов, участвующих в социальных и благотворительных проектах. Фокус на психологической поддержке в НКО, медицинских организациях, профилактике агрессии и выгорания.',
    courses: [
      'Школа волонтёров в психиатрии (бесплатный курс)',
      'Социальный импакт (бесплатная программа)'
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

      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Направления обучения
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Лицензированные программы повышения квалификации для психологов и специалистов помогающих профессий
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Все программы проходят онлайн, включают лекции и практические модули, завершаются выдачей удостоверения о повышении квалификации установленного государственного образца.
            </p>
            <Button size="lg" className="text-lg px-8">
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {courseBlocks.map((block, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={block.icon} className="text-primary" size={32} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-2xl font-bold text-foreground">
                      {index + 1}. {block.title}
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {block.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    <p className="font-semibold text-foreground">Курсы блока:</p>
                    <ul className="space-y-2">
                      {block.courses.map((course, courseIndex) => (
                        <li key={courseIndex}>
                          <a
                            href="#"
                            className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                          >
                            <Icon name="BookOpen" size={16} />
                            {course}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="MonitorPlay" size={16} />
                    <span>Формат: онлайн</span>
                    <span className="mx-2">•</span>
                    <Icon name="Award" size={16} />
                    <span>Удостоверение о повышении квалификации</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-primary/5 border-primary/20">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Лицензия и надёжность</h2>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                Все программы НОЦ СМТ реализуются по лицензии на осуществление образовательной деятельности и завершаются выдачей удостоверения установленного государственного образца.
              </p>
              <div className="flex items-center gap-4">
                <Icon name="FileCheck" className="text-primary" size={24} />
                <Button variant="link" className="text-primary p-0 h-auto font-semibold text-lg">
                  Посмотреть лицензию →
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Как выбрать направление</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Не уверены, какой курс подойдёт именно вам? Оставьте заявку, и методист центра поможет подобрать оптимальную программу исходя из вашего опыта, задач и профессиональных интересов.
            </p>
            <Button size="lg" className="text-lg px-8">
              Получить консультацию специалиста →
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 НОЦ СМТ. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
