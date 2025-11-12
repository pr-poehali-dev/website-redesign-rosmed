import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">
              НОЦ СМТ
            </Link>
            <div className="flex gap-6">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Направления
              </Link>
              <Link to="/about" className="text-primary font-semibold">
                О центре
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Кто мы</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              НОЦ СМТ — Научно-образовательный центр современных медицинских технологий — это образовательная площадка для психологов, психиатров, социальных работников и всех специалистов помогающих профессий, стремящихся к системному и безопасному развитию в профессии.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Центр работает при поддержке Союза охраны психического здоровья и объединяет преподавателей-практиков, клиницистов и исследователей, создавая образовательные программы, соответствующие международным стандартам.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы формируем пространство, где обучение строится на научной базе, клиническом опыте и уважении к человеку — как к клиенту, так и к специалисту.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Наша миссия</h2>
          <Card className="bg-muted/50 border-0 p-8">
            <p className="text-xl font-semibold mb-6 text-foreground">
              Вернуть уважение к психологическому образованию.
            </p>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Создать профессиональную среду, где знания становятся опорой, а не просто набором сертификатов.
              </p>
              <p>
                Помочь специалистам не терять смысл в профессии — развиваться, сохраняя этику, компетентность и человечность.
              </p>
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Наш подход</h2>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы убеждены, что качественное психологическое образование — это не про скорость, а про глубину.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              В основе всех программ — клиническое мышление, академическая честность и практическая применимость знаний.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Каждый курс создаётся в сотрудничестве с преподавателями-практиками: клиническими психологами, психиатрами, судебными экспертами, психотерапевтами, работающими в реальных медицинских и образовательных учреждениях.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Руководитель центра</h2>
          <Card className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-48 h-48 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="User" size={80} className="text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Екатерина Мальцева</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Директор Союза охраны психического здоровья и руководитель НОЦ СМТ, где обучают психологов и психотерапевтов с выдачей документов установленного образца.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Надёжность и лицензия</h2>
          <Card className="bg-primary/5 border-primary/20 p-8">
            <div className="space-y-4">
              <p className="text-lg text-foreground">
                Все программы НОЦ СМТ проходят по лицензии на осуществление образовательной деятельности, зарегистрированной в реестре Рособрнадзора.
              </p>
              <p className="text-lg text-foreground">
                По окончании курсов слушатели получают удостоверение о повышении квалификации установленного государственного образца.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <Icon name="FileCheck" className="text-primary" size={24} />
                <Button variant="link" className="text-primary p-0 h-auto font-semibold">
                  Посмотреть лицензию →
                </Button>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Мы создаём пространство, где:</h2>
          <div className="grid gap-6">
            {[
              'преподаватели — практики, а не теоретики',
              'обучение — инструмент профессионального роста, а не формальность',
              'ошибки — часть процесса, а не повод для стыда',
              'коллеги становятся сообществом, где можно получить поддержку и супервизию'
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-lg text-foreground">{item}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Наши ценности</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Осознанное образование',
                description: 'знание ради понимания, а не ради сертификата'
              },
              {
                title: 'Этичная коммуникация',
                description: 'уважение к коллегам, клиентам и профессии'
              },
              {
                title: 'Профессиональная поддержка',
                description: 'через супервизии и сообщество специалистов'
              },
              {
                title: 'Клиническое мышление',
                description: 'основа ответственной психологической практики'
              },
              {
                title: 'Развитие без выгорания',
                description: 'обучение в безопасной, поддерживающей атмосфере'
              }
            ].map((value, index) => (
              <Card key={index} className="p-6 hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Мы открыты для сотрудничества</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Центр сотрудничает с вузами, профессиональными ассоциациями и организациями, развивающими систему психического здоровья в России.
            </p>
            <p>
              Наша цель — объединять специалистов разных направлений ради одной задачи: помогать людям качественно и профессионально.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Контакты</h2>
          <Card className="p-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Mail" className="text-primary" size={24} />
                <a href="mailto:info@rosmededucation.ru" className="text-lg text-foreground hover:text-primary transition-colors">
                  info@rosmededucation.ru
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Globe" className="text-primary" size={24} />
                <a href="https://rosmededucation.ru" className="text-lg text-foreground hover:text-primary transition-colors">
                  rosmededucation.ru
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Phone" className="text-primary" size={24} />
                <span className="text-lg text-foreground">+7 (XXX) XXX-XX-XX</span>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <footer className="border-t py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 НОЦ СМТ. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
