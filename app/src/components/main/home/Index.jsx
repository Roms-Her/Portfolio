import MoreInformation from './moreInformations/rendering/Index'
import Project from './project/logic/Index-logic'
import Skills from './skills/rendering/Index'
import Welcome from './welcome/rendering/Index'
export default function Index() {
  return (
    <>
    <Welcome />
    <Project />
    <Skills />
    <MoreInformation />
    </>
  )
}
