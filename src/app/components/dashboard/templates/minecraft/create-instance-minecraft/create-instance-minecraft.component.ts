import { Component, OnInit } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-create-instance-minecraft',
  templateUrl: './create-instance-minecraft.component.html',
  styleUrls: ['./create-instance-minecraft.component.css']
})
export class CreateInstanceMinecraftComponent implements OnInit {
  public options: {
    mem?: string;
    version?: string;
    launcher?: string | undefined;
    seed?: string;
    port?: string;
    rconPort?: string;
    rconPass?: string;
  } | undefined

  public launcher: string = ''
  public version: string = ''

  public versions: { Vanilla: [], Forge: [], Fabric: [], Spigot: [], Bukkit: [] } = { Vanilla: [], Forge: [], Fabric: [], Spigot: [], Bukkit: [] }

  constructor(private dashboardService: DashboardService, private modalS: ModalsService) { }

  ngOnInit(): void {
    this.dashboardService.getMinecraftVanillaVersions().subscribe(
      res => {
        for (let version of res)//@ts-ignore
          this.versions.Vanilla.push(version.id)
      },
      err => console.log(err)
    )
    this.dashboardService.getMinecraftFabricVersions().subscribe(
      res => {
        for (let version of res)//@ts-ignore
          this.versions.Fabric.push(version.version)
        console.log(res.versions.id);
      },
      err => console.log(err)
    )


  }

  versionSelect() { console.log("lohgave") }

  saveData(mem: HTMLInputElement, version: any, launcher: string, seed: HTMLInputElement, port: HTMLInputElement, rconPort: HTMLInputElement, rconPass: HTMLInputElement) {
    this.options = {
      mem: mem.value,
      version: version,
      launcher: launcher,
      seed: seed.value,
      port: port.value,
      rconPort: rconPort.value,
      rconPass: rconPass.value
    }
    this.modalS.$optionsInstance.emit(this.options)
  }

}
