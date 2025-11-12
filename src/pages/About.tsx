import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white shadow-sm">
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

      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-center">
            👋 Кто мы
          </h1>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <section className="mb-8">
          <Card className="p-6 bg-gradient-to-br from-white to-blue-50/30">
            <p className="text-base text-muted-foreground leading-relaxed mb-3">
              <strong className="text-foreground">НОЦ СМТ</strong> — Научно-образовательный центр современных медицинских технологий — это образовательная площадка для психологов, психиатров, социальных работников и всех специалистов помогающих профессий.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-3">
              Центр работает при поддержке Союза охраны психического здоровья и объединяет преподавателей-практиков, клиницистов и исследователей.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Мы формируем пространство, где обучение строится на научной базе, клиническом опыте и уважении к человеку.
            </p>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-foreground">🎯 Наша миссия</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-5 bg-gradient-to-br from-purple-50 to-purple-100/50 hover:shadow-lg transition-shadow">
              <p className="text-base font-semibold text-foreground mb-2">
                Вернуть уважение к образованию
              </p>
              <p className="text-sm text-muted-foreground">
                Знания должны стать опорой, а не набором сертификатов
              </p>
            </Card>
            <Card className="p-5 bg-gradient-to-br from-blue-50 to-blue-100/50 hover:shadow-lg transition-shadow">
              <p className="text-base font-semibold text-foreground mb-2">
                Создать профессиональную среду
              </p>
              <p className="text-sm text-muted-foreground">
                Где специалисты развиваются системно и безопасно
              </p>
            </Card>
            <Card className="p-5 bg-gradient-to-br from-pink-50 to-pink-100/50 hover:shadow-lg transition-shadow">
              <p className="text-base font-semibold text-foreground mb-2">
                Сохранять смысл профессии
              </p>
              <p className="text-sm text-muted-foreground">
                Этика, компетентность и человечность
              </p>
            </Card>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-foreground">💡 Наш подход</h2>
          <Card className="p-6 bg-gradient-to-br from-green-50/50 to-teal-50/50">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">📚</span>
                </div>
                <p className="text-sm text-muted-foreground flex-1">
                  Качественное образование — это про <strong>глубину</strong>, а не скорость
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🧠</span>
                </div>
                <p className="text-sm text-muted-foreground flex-1">
                  В основе программ — клиническое мышление, академическая честность и практическая применимость
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">👥</span>
                </div>
                <p className="text-sm text-muted-foreground flex-1">
                  Курсы создаются с преподавателями-практиками: клиническими психологами, психиатрами, судебными экспертами
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-foreground">👤 Руководитель центра</h2>
          <Card className="p-6 bg-gradient-to-br from-purple-50/50 to-pink-50/50">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Icon name="User" size={60} className="text-purple-600" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Екатерина Мальцева</h3>
                <p className="text-sm text-muted-foreground">
                  Директор Союза охраны психического здоровья и руководитель НОЦ СМТ, где обучают психологов и психотерапевтов с выдачей документов установленного образца.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-foreground">✅ Надёжность и лицензия</h2>
          <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="FileCheck" className="text-green-600" size={24} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground mb-2">
                  Все программы НОЦ СМТ проходят по <strong>лицензии на осуществление образовательной деятельности</strong>, зарегистрированной в реестре Рособрнадзора.
                </p>
                <p className="text-sm text-foreground mb-3">
                  По окончании курсов слушатели получают <strong>удостоверение установленного государственного образца</strong>.
                </p>
                <Button variant="link" className="text-green-700 p-0 h-auto font-semibold text-sm">
                  Посмотреть лицензию →
                </Button>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-foreground">🌟 Мы создаём пространство, где:</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: '👨‍🏫', text: 'преподаватели — практики, а не теоретики' },
              { icon: '📈', text: 'обучение — инструмент роста, а не формальность' },
              { icon: '💪', text: 'ошибки — часть процесса, а не повод для стыда' },
              { icon: '🤝', text: 'коллеги — сообщество поддержки и супервизии' }
            ].map((item, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-shadow bg-gradient-to-br from-white to-blue-50/20">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-sm text-foreground">{item.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-foreground">💎 Наши ценности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '🎓', title: 'Осознанное образование', desc: 'знание ради понимания' },
              { icon: '🤲', title: 'Этичная коммуникация', desc: 'уважение к людям' },
              { icon: '🫂', title: 'Профессиональная поддержка', desc: 'супервизии и сообщество' },
              { icon: '🧠', title: 'Клиническое мышление', desc: 'основа практики' },
              { icon: '🌱', title: 'Развитие без выгорания', desc: 'безопасная атмосфера' }
            ].map((value, index) => (
              <Card key={index} className="p-4 hover:border-primary/50 transition-colors">
                <div className="text-2xl mb-2">{value.icon}</div>
                <h3 className="text-base font-semibold mb-1 text-foreground">{value.title}</h3>
                <p className="text-xs text-muted-foreground">{value.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-foreground">🤝 Открыты для сотрудничества</h2>
          <Card className="p-6 bg-gradient-to-br from-orange-50 to-yellow-50">
            <p className="text-sm text-muted-foreground mb-2">
              Центр сотрудничает с вузами, профессиональными ассоциациями и организациями, развивающими систему психического здоровья в России.
            </p>
            <p className="text-sm font-semibold text-foreground">
              Наша цель — объединять специалистов ради качественной помощи людям
            </p>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-foreground">📞 Контакты</h2>
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Icon name="Mail" className="text-primary" size={20} />
                <a href="mailto:info@rosmededucation.ru" className="text-sm text-foreground hover:text-primary transition-colors">
                  info@rosmededucation.ru
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Globe" className="text-primary" size={20} />
                <a href="https://rosmededucation.ru" className="text-sm text-foreground hover:text-primary transition-colors">
                  rosmededucation.ru
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" className="text-primary" size={20} />
                <span className="text-sm text-foreground">+7 (XXX) XXX-XX-XX</span>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <footer className="border-t py-6 bg-white">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 НОЦ СМТ. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
